'use client'

import { TrendingUp, Database, Zap, Users } from 'lucide-react'

export default function StatsPanel() {
  const stats = [
    {
      icon: Database,
      label: 'Conceptos',
      value: '50+',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      label: 'Tecnologías',
      value: '100+',
      color: 'text-yellow-400'
    },
    {
      icon: TrendingUp,
      label: 'Casos de Uso',
      value: '25+',
      color: 'text-green-400'
    },
    {
      icon: Users,
      label: 'Industrias',
      value: '10+',
      color: 'text-purple-400'
    }
  ]

  return (
    <div className="mb-6 p-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30">
      <h3 className="text-sm font-semibold mb-3 text-purple-300">Contenido del Mapa</h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-black/30 p-3 rounded-lg">
            <stat.icon className={`${stat.color} mb-1`} size={20} />
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
