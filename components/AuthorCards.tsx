'use client'

import { User } from 'lucide-react'
import { authors } from '@/data/authors'
import type { Author } from '@/data/authors'

function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/30 transition-colors">
      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
        {author.photoUrl ? (
          <img
            src={author.photoUrl}
            alt={author.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User size={24} className="text-gray-500" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white truncate">{author.name}</p>
        <p className="text-xs text-gray-400">No. Control: {author.numeroControl}</p>
      </div>
    </div>
  )
}

export default function AuthorCards() {
  return (
    <div className="pt-4 border-t border-gray-700">
      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Autores
      </h4>
      <div className="space-y-2">
        {authors.map((author, index) => (
          <AuthorCard key={index} author={author} />
        ))}
      </div>
    </div>
  )
}
