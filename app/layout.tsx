import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mapa Conceptual Interactivo - Big Data',
  description: 'Explora los fundamentos, arquitectura, tecnologías y aplicaciones del Big Data de forma interactiva',
  keywords: 'Big Data, Data Science, Analytics, Hadoop, Spark, Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
