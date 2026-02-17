'use client'

import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { X, ExternalLink, CheckCircle, AlertCircle, Lightbulb, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TreeNode } from '@/data/bigDataInfo'

interface PanelInformacionProps {
  node: TreeNode
  onClose: () => void
}

export default function PanelInformacion({ node, onClose }: PanelInformacionProps) {
  if (!node) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="mt-6 bg-gradient-to-br from-gray-900/95 to-purple-900/30 rounded-xl border border-purple-500/30 overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            {node.data.icon && <span className="text-3xl">{node.data.icon}</span>}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{node.data.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{node.data.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-4">
          {/* Detailed Info */}
          {node.data.detailedInfo && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb size={16} className="text-yellow-400" />
                <h4 className="font-semibold text-sm text-yellow-400">Información Detallada</h4>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_p]:my-1">
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                  {node.data.detailedInfo}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Examples */}
          {node.data.examples && node.data.examples.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle size={16} className="text-green-400" />
                <h4 className="font-semibold text-sm text-green-400">Ejemplos</h4>
              </div>
              <ul className="space-y-1">
                {node.data.examples.map((example: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 pl-4 border-l-2 border-green-400/30">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {node.data.technologies && node.data.technologies.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Code size={16} className="text-blue-400" />
                <h4 className="font-semibold text-sm text-blue-400">Tecnologías</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {node.data.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {node.data.benefits && node.data.benefits.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle size={16} className="text-purple-400" />
                <h4 className="font-semibold text-sm text-purple-400">Beneficios</h4>
              </div>
              <ul className="space-y-1">
                {node.data.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {node.data.challenges && node.data.challenges.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle size={16} className="text-orange-400" />
                <h4 className="font-semibold text-sm text-orange-400">Desafíos</h4>
              </div>
              <ul className="space-y-1">
                {node.data.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">⚠</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {node.data.resources && node.data.resources.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <ExternalLink size={16} className="text-cyan-400" />
                <h4 className="font-semibold text-sm text-cyan-400">Recursos Externos</h4>
              </div>
              <ul className="space-y-2">
                {node.data.resources.map((resource: { title: string; url: string }, index: number) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-300 hover:text-cyan-400 hover:underline flex items-center space-x-1"
                    >
                      <span>{resource.title}</span>
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
