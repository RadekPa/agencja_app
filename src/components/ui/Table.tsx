import React from 'react'

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <table className="min-w-full divide-y divide-border">
      {children}
    </table>
  )
}

export function Th({ children, onClick, active, order, className }: { children: React.ReactNode; onClick?: ()=>void; active?: boolean; order?: 'asc'|'desc'; className?: string }) {
  const base = 'px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider'
  return (
    <th className={`${base} ${className ?? ''}`}>
      <button onClick={onClick} className="flex items-center gap-1">
        <span>{children}</span>
        {active && (
          <span className="text-muted-foreground">{order === 'asc' ? '▲' : '▼'}</span>
        )}
      </button>
    </th>
  )
}

export function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  const base = 'px-4 py-2 text-sm text-card-foreground'
  return <td className={`${base} ${className ?? ''}`}>{children}</td>
}
