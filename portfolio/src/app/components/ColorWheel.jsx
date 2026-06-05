import React from 'react';

export default function ColorWheel({ themes, setIndex, handleRandom }) {
  const segments = themes.map((theme, i) => {
    const angle = (2 * Math.PI) / (themes.length + 1)
    const startAngle = i * angle - Math.PI / 2
    const endAngle = startAngle + angle

    const x1 = 20 + 18 * Math.cos(startAngle)
    const y1 = 20 + 18 * Math.sin(startAngle)
    const x2 = 20 + 18 * Math.cos(endAngle)
    const y2 = 20 + 18 * Math.sin(endAngle)

    const d = `M20,20 L${x1},${y1} A18,18 0 0,1 ${x2},${y2} Z`

    return (
      <path
        key={i}
        d={d}
        fill={theme.fg}
        onClick={() => setIndex(i)}
        className="cursor-pointer hover:opacity-80 transition-opacity"
        />
    )
  })

  const angle = (2 * Math.PI) / (themes.length + 1)
  const startAngle = themes.length * angle - Math.PI / 2
  const endAngle = startAngle + angle
  const x1 = 20 + 18 * Math.cos(startAngle)
  const y1 = 20 + 18 * Math.sin(startAngle)
  const x2 = 20 + 18 * Math.cos(endAngle)
  const y2 = 20 + 18 * Math.sin(endAngle)
  const randomSegment = (
    <g onClick={handleRandom} className="cursor-pointer hover:opacity-80 transition-opacity">
      <path
        d={`M20,20 L${x1},${y1} A18,18 0 0,1 ${x2},${y2} Z`}
        fill = "white"
      />
      <text
        x={20 + 10 * Math.cos((startAngle + endAngle) / 2)}
        y={20 + 10 * Math.sin((startAngle + endAngle) / 2)}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="6"
        fontWeight="bold"
        fill="black"
        >?</text>
    </g>
  )

  return (
    <svg width="300" height="300" viewBox="0 0 40 40">
      {segments}
      {randomSegment}
      <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="0.4" />
    </svg>
  )
}