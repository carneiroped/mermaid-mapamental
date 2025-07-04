'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
  id: string
}

export default function MermaidDiagram({ chart, id }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
          fontSize: '14px'
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true
        }
      })
      
      ref.current.innerHTML = chart
      mermaid.contentLoaded()
    }
  }, [chart])

  return (
    <div 
      ref={ref}
      id={id}
      className="mermaid w-full overflow-x-auto"
    />
  )
}