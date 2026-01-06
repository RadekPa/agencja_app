import React from 'react'

export function HeroCards({ items }: { items: { title: string; value: string | number; hint?: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <div key={idx} className="card">
          <h2 className="text-sm text-muted-foreground">{it.title}</h2>
          <p className="text-3xl font-semibold mt-2 text-card-foreground">{it.value}</p>
          {it.hint && <p className="text-xs text-muted-foreground mt-1">{it.hint}</p>}
        </div>
      ))}
    </div>
  )
}
