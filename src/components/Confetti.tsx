export function Confetti() {
  const colors = ['#ff006e', '#ff4081', '#f50057', '#c51162', '#880e4f', '#4a148c', '#7b1fa2', '#9c27b0']
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const size = Math.random() * 10 + 5
        const left = Math.random() * 100
        const animationDuration = Math.random() * 3 + 2
        const animationDelay = Math.random() * 2
        
        return (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${left}%`,
              top: '-5%',
              width: `${size}px`,
              height: `${size * 0.6}px`,
              backgroundColor: color,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        )
      })}
    </div>
  )
}