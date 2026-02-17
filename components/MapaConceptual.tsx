'use client'

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { bigDataTree, NodeData } from '@/data/bigDataInfo'
import { motion } from 'framer-motion'
import { ZoomIn, ZoomOut, Maximize2, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import ModalDetalles from './ModalDetalles'

interface MapaConceptualProps {
  onNodeSelect: (node: any) => void
  searchTerm: string
  viewMode: 'tree' | 'radial'
  darkMode: boolean
}

export default function MapaConceptual({ onNodeSelect, searchTerm, viewMode, darkMode }: MapaConceptualProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [zoomLevel, setZoomLevel] = useState(1)
  const zoomBehaviorRef = useRef<any>(null)
  const [modalNode, setModalNode] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Presentation mode
  const rootRef = useRef<any>(null)
  const updateFnRef = useRef<((node: any) => void) | null>(null)
  const currentMainIndexRef = useRef<number | null>(null)
  const [currentMainIndex, setCurrentMainIndex] = useState<number | null>(null)
  const [currentMainName, setCurrentMainName] = useState<string>('')
  const [mainNodesCount, setMainNodesCount] = useState(0)

  // Navigate to a specific main node by index
  const navigateTo = (index: number) => {
    const root = rootRef.current
    const updateFn = updateFnRef.current
    if (!root || !updateFn) return

    // Expand root if collapsed
    if (root._children) {
      root.children = root._children
      root._children = null
    }
    if (!root.children) return

    // Collapse all main nodes first
    root.children.forEach((child: any) => {
      if (child.children) {
        child._children = child.children
        child.children = null
      }
    })

    // Expand target main node
    const target = root.children[index]
    if (!target) return
    if (target._children) {
      target.children = target._children
      target._children = null
    }

    currentMainIndexRef.current = index
    setCurrentMainIndex(index)
    setCurrentMainName(target.data.name)
    onNodeSelect(target)
    // update() llamará fitNodesToView automáticamente
    updateFn(root)
  }

  const handlePrev = () => {
    const root = rootRef.current
    const children = root?.children || root?._children
    if (!children) return
    const count = children.length
    const cur = currentMainIndexRef.current
    const next = cur === null ? count - 1 : (cur - 1 + count) % count
    navigateTo(next)
  }

  const handleNext = () => {
    const root = rootRef.current
    const children = root?.children || root?._children
    if (!children) return
    const count = children.length
    const cur = currentMainIndexRef.current
    const next = cur === null ? 0 : (cur + 1) % count
    navigateTo(next)
  }

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    d3.select(svgRef.current).selectAll('*').remove()

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight
    setDimensions({ width, height })

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    const g = svg.append('g')
      .attr('class', 'main-group')

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
        setZoomLevel(event.transform.k)
      })

    svg.call(zoom)
    zoomBehaviorRef.current = zoom

    // Centrar en la raíz inicialmente
    const initialTransform = d3.zoomIdentity
      .translate(width / 2, height / 2)
      .scale(1)
    svg.call(zoom.transform, initialTransform)

    const root = d3.hierarchy(bigDataTree, (d: NodeData) => d.children) as any
    root.x0 = height / 2
    root.y0 = 0

    // Colapsar todo el árbol recursivamente
    const collapse = (d: any) => {
      if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
      }
    }

    // Colapsar TODO: incluyendo los hijos directos de la raíz
    collapse(root)

    // Guardar referencias para la navegación
    rootRef.current = root
    const count = root._children?.length || 0
    setMainNodesCount(count)

    // Resetear estado de presentación
    currentMainIndexRef.current = null
    setCurrentMainIndex(null)
    setCurrentMainName('')

    let i = 0
    const duration = 750

    // Ajusta zoom y pan para que todos los nodos visibles quepan en pantalla
    function fitNodesToView(visibleNodes: any[]) {
      if (!svgRef.current || !zoomBehaviorRef.current || !containerRef.current) return
      if (visibleNodes.length === 0) return

      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      const PADDING = 80

      // Nodo raíz solo: zoom cómodo centrado en él
      if (visibleNodes.length === 1) {
        const d = visibleNodes[0]
        const scale = 1.8
        const tx = w / 2 - scale * d.y
        const ty = h / 2 - scale * d.x
        d3.select(svgRef.current!)
          .transition().duration(850)
          .call(zoomBehaviorRef.current.transform, d3.zoomIdentity.translate(tx, ty).scale(scale))
        return
      }

      // Posición SVG de cada nodo: translate(d.y, d.x)
      const allSvgX = visibleNodes.map((d: any) => d.y) // eje horizontal
      const allSvgY = visibleNodes.map((d: any) => d.x) // eje vertical

      const minX = Math.min(...allSvgX)
      const maxX = Math.max(...allSvgX)
      const minY = Math.min(...allSvgY)
      const maxY = Math.max(...allSvgY)

      // Margen extra para etiquetas de texto
      // Nodos padre: texto a la izquierda (~200px), nodos hoja: texto a la derecha (~260px)
      const left   = minX - 230
      const right  = maxX + 280
      const top    = minY - 90
      const bottom = maxY + 90

      const contentW = right - left
      const contentH = bottom - top

      const scaleX = (w - PADDING * 2) / contentW
      const scaleY = (h - PADDING * 2) / contentH
      const scale  = Math.min(Math.max(Math.min(scaleX, scaleY), 0.1), 2.2)

      const cx = (left + right) / 2
      const cy = (top + bottom) / 2

      d3.select(svgRef.current!)
        .transition().duration(850)
        .call(zoomBehaviorRef.current.transform,
          d3.zoomIdentity.translate(w / 2 - scale * cx, h / 2 - scale * cy).scale(scale))
    }

    function update(source: any) {
      let nodes: any, links: any

      if (viewMode === 'radial') {
        const tree = d3.tree<NodeData>()
          .size([2 * Math.PI, Math.min(width, height) / 2 - 100])
          .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)

        const treeData = tree(root)
        nodes = treeData.descendants()
        links = treeData.links()

        nodes.forEach((d: any) => {
          d.y = d.depth * 120
          const angle = d.x
          d.x = d.y * Math.cos(angle - Math.PI / 2)
          d.y = d.y * Math.sin(angle - Math.PI / 2)
        })
      } else {
        const tree = d3.tree<NodeData>()
          .nodeSize([100, 350])

        const treeData = tree(root)
        nodes = treeData.descendants()
        links = treeData.links()

        nodes.forEach((d: any) => {
          d.y = d.depth * 350
        })
      }

      if (searchTerm) {
        nodes.forEach((d: any) => {
          const matches = d.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.data.description.toLowerCase().includes(searchTerm.toLowerCase())
          d.highlight = matches
        })
      }

      const link = g.selectAll<SVGPathElement, any>('.link')
        .data(links, (d: any) => d.target.id || (d.target.id = ++i))

      link.exit().transition()
        .duration(duration)
        .attr('d', () => {
          const o = { x: source.x, y: source.y }
          return diagonal(o, o)
        })
        .style('opacity', 0)
        .remove()

      const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', () => {
          const o = { x: source.x0, y: source.y0 }
          return diagonal(o, o)
        })
        .style('fill', 'none')
        .style('stroke', (d: any) => d.target.data.color)
        .style('stroke-width', 2)
        .style('stroke-opacity', 0.6)
        .style('opacity', 0)

      linkEnter.merge(link as any).transition()
        .duration(duration)
        .attr('d', (d: any) => diagonal(d.source, d.target))
        .style('opacity', 1)

      const node = g.selectAll<SVGGElement, any>('.node')
        .data(nodes, (d: any) => d.id || (d.id = ++i))

      node.exit().transition()
        .duration(duration)
        .attr('transform', () => `translate(${source.y},${source.x})`)
        .style('opacity', 0)
        .remove()

      const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', () => `translate(${source.y0},${source.x0})`)
        .style('cursor', 'pointer')
        .style('opacity', 0)
        .on('click', (event, d: any) => {
          const isLeaf = !d.children && !d._children

          if (isLeaf) {
            setModalNode(d)
            setIsModalOpen(true)
            onNodeSelect(d)
          } else {
            if (d.children) {
              d._children = d.children
              d.children = null
            } else if (d._children) {
              d.children = d._children
              d._children = null
            }
            onNodeSelect(d)
            update(d)

            // Actualizar índice de presentación si es un nodo principal
            if (d.depth === 1 && rootRef.current?.children) {
              const idx = rootRef.current.children.indexOf(d)
              if (idx !== -1 && d.children) {
                currentMainIndexRef.current = idx
                setCurrentMainIndex(idx)
                setCurrentMainName(d.data.name)
              } else {
                currentMainIndexRef.current = null
                setCurrentMainIndex(null)
                setCurrentMainName('')
              }
            }
          }
        })
        .on('mouseover', function (event, d: any) {
          d3.select(this).select('circle')
            .transition()
            .duration(200)
            .attr('r', 14)
            .style('filter', 'drop-shadow(0 0 8px currentColor)')
        })
        .on('mouseout', function () {
          d3.select(this).select('circle')
            .transition()
            .duration(200)
            .attr('r', 10)
            .style('filter', 'none')
        })

      // Pulso especial para nodo raíz y nodos principales colapsados
      nodeEnter.filter((d: any) => d.depth === 0 || (d.depth === 1 && !d.children))
        .append('circle')
        .attr('class', 'pulse-ring')
        .attr('r', 18)
        .style('fill', 'none')
        .style('stroke', (d: any) => d.data.color)
        .style('stroke-width', 1.5)
        .style('stroke-opacity', 0.4)

      nodeEnter.append('circle')
        .attr('r', 1e-6)
        .style('fill', (d: any) => d._children ? d.data.color : (darkMode ? '#1a1b26' : '#ffffff'))
        .style('stroke', (d: any) => d.data.color)
        .style('stroke-width', 3)

      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('x', (d: any) => d.children || d._children ? -18 : 18)
        .attr('text-anchor', (d: any) => d.children || d._children ? 'end' : 'start')
        .text((d: any) => (viewMode === 'tree' && d.data.icon ? d.data.icon + ' ' : '') + d.data.name)
        .style('fill', darkMode ? '#e0e0e0' : '#333333')
        .style('font-size', '14px')
        .style('font-weight', (d: any) => d.highlight ? 'bold' : 'normal')
        .style('fill', (d: any) => d.highlight ? '#fbbf24' : (darkMode ? '#e0e0e0' : '#333333'))

      const nodeUpdate = nodeEnter.merge(node as any).transition()
        .duration(duration)
        .attr('transform', (d: any) => `translate(${d.y},${d.x})`)
        .style('opacity', 1)

      nodeUpdate.select('circle:not(.pulse-ring)')
        .attr('r', 10)
        .style('fill', (d: any) => d._children ? d.data.color : (darkMode ? '#1a1b26' : '#ffffff'))

      nodes.forEach((d: any) => {
        d.x0 = d.x
        d.y0 = d.y
      })

      // Auto-fit: ajustar zoom para que todos los nodos visibles quepan en pantalla
      fitNodesToView(nodes)
    }

    // Guardar referencia a update para la navegación
    updateFnRef.current = update

    function diagonal(s: any, d: any) {
      if (viewMode === 'radial') {
        return `M ${s.x} ${s.y}
                C ${(s.x + d.x) / 2} ${s.y},
                  ${(s.x + d.x) / 2} ${d.y},
                  ${d.x} ${d.y}`
      } else {
        return `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`
      }
    }

    update(root)

  }, [viewMode, searchTerm, darkMode, onNodeSelect])

  const handleZoomIn = () => {
    if (svgRef.current && zoomBehaviorRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomBehaviorRef.current.scaleBy, 1.3)
    }
  }

  const handleZoomOut = () => {
    if (svgRef.current && zoomBehaviorRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomBehaviorRef.current.scaleBy, 0.7)
    }
  }

  const handleReset = () => {
    if (svgRef.current && zoomBehaviorRef.current) {
      const initialTransform = d3.zoomIdentity
        .translate(dimensions.width / 2, dimensions.height / 2)
        .scale(1)
      d3.select(svgRef.current)
        .transition()
        .duration(750)
        .call(zoomBehaviorRef.current.transform, initialTransform)
    }
  }

  const handleDownload = () => {
    if (!svgRef.current) return
    const svgData = new XMLSerializer().serializeToString(svgRef.current)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'mapa-conceptual-bigdata.svg'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <div ref={containerRef} className="relative w-full h-full">
        <svg ref={svgRef} className="w-full h-full" />

        {/* Barra de navegación de presentación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 border border-gray-700 z-10 shadow-lg"
        >
          <button
            onClick={handlePrev}
            className="p-1.5 bg-purple-600/30 hover:bg-purple-600/60 rounded-lg transition-all text-white"
            title="Tema anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-center min-w-[160px]">
            {currentMainName ? (
              <>
                <p className="text-sm font-semibold text-white leading-tight truncate max-w-[160px]">
                  {currentMainName}
                </p>
                <p className="text-xs text-gray-400">
                  {(currentMainIndex ?? 0) + 1} / {mainNodesCount}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-400">Usa las flechas para navegar</p>
            )}
          </div>

          <button
            onClick={handleNext}
            className="p-1.5 bg-purple-600/30 hover:bg-purple-600/60 rounded-lg transition-all text-white"
            title="Tema siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Controles de zoom */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-lg p-2 space-y-2 border border-gray-700"
        >
          <button
            onClick={handleZoomIn}
            className="block p-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition-all"
            title="Acercar"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="block p-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition-all"
            title="Alejar"
          >
            <ZoomOut size={20} />
          </button>
          <button
            onClick={handleReset}
            className="block p-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition-all"
            title="Restablecer vista"
          >
            <Maximize2 size={20} />
          </button>
          <button
            onClick={handleDownload}
            className="block p-2 bg-green-600/30 hover:bg-green-600/50 rounded-lg transition-all"
            title="Descargar SVG"
          >
            <Download size={20} />
          </button>
        </motion.div>

        {/* Indicador de zoom */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md rounded-lg px-3 py-2 text-sm border border-gray-700">
          <span className="text-gray-400">Zoom:</span>{' '}
          <span className="text-white font-semibold">{Math.round(zoomLevel * 100)}%</span>
        </div>
      </div>

      <ModalDetalles
        node={modalNode}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
