'use client'

import { useState } from 'react'
import MapaConceptual from '@/components/MapaConceptual'
import PanelInformacion from '@/components/PanelInformacion'
import Header from '@/components/Header'
import AuthorCards from '@/components/AuthorCards'
import type { TreeNode } from '@/data/bigDataInfo'

export default function Home() {
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-black' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="flex h-screen pt-16">
        {/* Panel lateral izquierdo */}
        <div className="w-80 border-r border-gray-700 bg-black/30 backdrop-blur-md flex flex-col overflow-hidden">
          <div className="p-4 flex-1 overflow-y-auto min-h-0">
            {selectedNode && (
              <PanelInformacion 
                node={selectedNode} 
                onClose={() => setSelectedNode(null)} 
              />
            )}
          </div>
          <div className="p-4 flex-shrink-0">
            <AuthorCards />
          </div>
        </div>

        {/* Área principal del mapa */}
        <div className="flex-1 relative">
          <MapaConceptual 
            onNodeSelect={setSelectedNode}
            searchTerm=""
            viewMode="tree"
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  )
}
