import { useRef } from 'react'

export function ContinuousConfetti() {
  const colors = ['#ff006e', '#ff4081', '#f50057', '#c51162', '#880e4f', '#4a148c', '#7b1fa2', '#9c27b0']
  const confettiCount = 50
  const createdRef = useRef(false)

  // Create confetti particles
  const createConfetti = () => {
    const particles = []
    for (let i = 0; i < confettiCount; i++) {
      particles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 4,
        animationDelay: Math.random() * 5
      })
    }
    return particles
  }

  if (!createdRef.current) {
    createdRef.current = true
  }

  const particles = createConfetti()

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti-continuous"
          style={{
            left: `${particle.left}%`,
            top: '-5%',
            width: `${particle.size}px`,
            height: `${particle.size * 0.6}px`,
            backgroundColor: particle.color,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  )
}