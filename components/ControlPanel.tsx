'use client'

import { LayoutGrid, GitBranch, BarChart3 } from 'lucide-react'

interface ControlPanelProps {
  viewMode: 'tree' | 'radial'
  setViewMode: (mode: 'tree' | 'radial') => void
  showStats: boolean
  setShowStats: (value: boolean) => void
}

export default function ControlPanel({ viewMode, setViewMode, showStats, setShowStats }: ControlPanelProps) {
  return (
    <div className="mb-6 space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2 text-gray-300">Modo de Vista</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setViewMode('tree')}
            className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all ${
              viewMode === 'tree'
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <GitBranch size={16} />
            <span className="text-sm">Árbol</span>
          </button>
          <button
            onClick={() => setViewMode('radial')}
            className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all ${
              viewMode === 'radial'
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <LayoutGrid size={16} />
            <span className="text-sm">Radial</span>
          </button>
        </div>
      </div>

      <div>
        <button
          onClick={() => setShowStats(!showStats)}
          className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all ${
            showStats
              ? 'bg-green-600 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          <BarChart3 size={16} />
          <span className="text-sm">Estadísticas</span>
        </button>
      </div>
    </div>
  )
}
