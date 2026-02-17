'use client'

import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { X, ExternalLink, CheckCircle, AlertCircle, Lightbulb, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TreeNode } from '@/data/bigDataInfo'

interface ModalDetallesProps {
    node: TreeNode | null
    isOpen: boolean
    onClose: () => void
}

export default function ModalDetalles({ node, isOpen, onClose }: ModalDetallesProps) {
    if (!isOpen || !node) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-gradient-to-br from-gray-900/98 to-purple-900/40 rounded-2xl border border-purple-500/30 max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-700 flex items-start justify-between bg-black/30">
                                <div className="flex items-start space-x-4 flex-1">
                                    {node.data.icon && <span className="text-4xl">{node.data.icon}</span>}
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-2">{node.data.name}</h2>
                                        <p className="text-gray-400">{node.data.description}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-4"
                                    aria-label="Cerrar"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 max-h-[calc(85vh-140px)] overflow-y-auto space-y-6">
                                {/* Detailed Info */}
                                {node.data.detailedInfo && (
                                    <div>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Lightbulb size={20} className="text-yellow-400" />
                                            <h3 className="font-semibold text-lg text-yellow-400">Información Detallada</h3>
                                        </div>
                                        <div className="text-gray-300 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_p]:my-1">
                                            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                                                {node.data.detailedInfo}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                )}

                                {/* Examples */}
                                {node.data.examples && node.data.examples.length > 0 && (
                                    <div>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <CheckCircle size={20} className="text-green-400" />
                                            <h3 className="font-semibold text-lg text-green-400">Ejemplos</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {node.data.examples.map((example: string, index: number) => (
                                                <li key={index} className="text-gray-300 pl-4 border-l-2 border-green-400/30 py-1">
                                                    {example}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                {node.data.technologies && node.data.technologies.length > 0 && (
                                    <div>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Code size={20} className="text-blue-400" />
                                            <h3 className="font-semibold text-lg text-blue-400">Tecnologías</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {node.data.technologies.map((tech: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
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
                                        <div className="flex items-center space-x-2 mb-3">
                                            <CheckCircle size={20} className="text-purple-400" />
                                            <h3 className="font-semibold text-lg text-purple-400">Beneficios</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {node.data.benefits.map((benefit: string, index: number) => (
                                                <li key={index} className="text-gray-300 flex items-start space-x-2">
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
                                        <div className="flex items-center space-x-2 mb-3">
                                            <AlertCircle size={20} className="text-orange-400" />
                                            <h3 className="font-semibold text-lg text-orange-400">Desafíos</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {node.data.challenges.map((challenge: string, index: number) => (
                                                <li key={index} className="text-gray-300 flex items-start space-x-2">
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
                                        <div className="flex items-center space-x-2 mb-3">
                                            <ExternalLink size={20} className="text-cyan-400" />
                                            <h3 className="font-semibold text-lg text-cyan-400">Recursos Externos</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {node.data.resources.map((resource: { title: string; url: string }, index: number) => (
                                                <li key={index}>
                                                    <a
                                                        href={resource.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-cyan-300 hover:text-cyan-400 hover:underline flex items-center space-x-2"
                                                    >
                                                        <span>{resource.title}</span>
                                                        <ExternalLink size={14} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
