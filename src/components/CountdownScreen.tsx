
import { useCountdown } from '../hooks/useCountDownContext'
import { Heart3D } from './Heart3D'
import { useRef, useState } from 'react'

export function CountdownScreen() {
  const { count, startCountdown, } = useCountdown()
  const hasStarted = useRef(false)
  const [isExpanding, setIsExpanding] = useState(false)

  // Start countdown on mount without useEffect
  if (!hasStarted.current) {
    hasStarted.current = true
    setTimeout(startCountdown, 100)
  }

  // Handle transition when countdown reaches 0
  if (count === 0 && !isExpanding) {
    setTimeout(() => setIsExpanding(true), 500)
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background particles */}
      {!isExpanding && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              <div className="w-2 h-2 bg-pink-400 rounded-full opacity-60 blur-sm" />
            </div>
          ))}
        </div>
      )}

      {/* 3D Heart Container */}
      <Heart3D count={count} isExpanding={isExpanding} />

      {/* Countdown Text */}
      {!isExpanding && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-2xl font-bold text-purple-800 animate-pulse">
            Get ready for something special...
          </p>
        </div>
      )}
    </div>
  )
}