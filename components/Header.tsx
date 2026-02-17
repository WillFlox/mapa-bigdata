'use client'

import { Moon, Sun, Info } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🌐</div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Big Data y sus Aplicaciones
            </h1>
            <p className="text-xs text-gray-400">Mapa Conceptual Interactivo</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 transition-all"
            title={darkMode ? 'Modo claro' : 'Modo oscuro'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
            <Info size={16} />
            <span>Haz clic en los nodos para expandir</span>
          </div>
        </div>
      </div>
    </header>
  )
}
