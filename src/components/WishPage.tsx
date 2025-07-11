import { FaHeart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { ContinuousConfetti } from './ContinuousConfetti'
import { useState, useRef } from 'react'

export function WishPage() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showMessages, setShowMessages] = useState(false)
  const hasStarted = useRef(false)

  const messages = [
    { text: "May your day be filled with endless joy", animation: "animate-slide-left" },
    { text: "May laughter echo in every corner of your life", animation: "animate-fade-up" },
    { text: "May success follow you in all your endeavors", animation: "animate-zoom-in" },
    { text: "May your dreams take flight and soar high", animation: "animate-slide-right" },
    { text: "May love surround you always and forever", animation: "animate-bounce-in" },
    { text: "May every moment sparkle with happiness", animation: "animate-rotate-in" },
    { text: "May adventures await you at every turn", animation: "animate-slide-up" },
    { text: "May your heart be light and spirit free", animation: "animate-fade-in" },
    { text: "May blessings rain upon you abundantly", animation: "animate-slide-down" },
    { text: "May your journey be filled with wonder", animation: "animate-flip-in" },
    { text: "May peace and prosperity be your companions", animation: "animate-scale-in" },
    { text: "May this year be your best one yet!", animation: "animate-bounce" }
  ]

  // Start showing messages after initial display
  if (!hasStarted.current) {
    hasStarted.current = true
    setTimeout(() => setShowMessages(true), 3000)
  }

  // Auto-advance messages
  if (showMessages && currentMessage < messages.length - 1) {
    setTimeout(() => {
      setCurrentMessage(currentMessage + 1)
    }, 3000)
  }

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-purple-100 overflow-hidden relative">
      <ContinuousConfetti />
      
      {/* Floating Balloons Background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-balloon"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '-100px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          >
            <div 
              className={`text-6xl ${['🎈', '🎈', '🎈', '🎈'][i % 4]}`}
              style={{ 
                filter: `hue-rotate(${i * 45}deg)`,
                transform: `scale(${0.8 + (i % 3) * 0.2})`
              }}
            >
              🎈
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {!showMessages ? (
          // Initial Birthday Message
          <div className="text-center animate-scale-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Happy Birthday
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-purple-800 animate-bounce">
              Jerry!
            </h2>
            <div className="mt-8 flex justify-center space-x-3">
              <FaHeart className="text-3xl text-pink-500 animate-pulse" />
              <FaStar className="text-3xl text-yellow-500 animate-spin-slow" />
              <FaHeart className="text-3xl text-pink-500 animate-pulse" />
            </div>
          </div>
        ) : (
          // Sequential Messages
          <div className="text-center w-full max-w-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Wishes for You
              </h3>
            </div>
            
            <div className="relative h-32 flex items-center justify-center">
              <p className={`text-2xl md:text-3xl text-gray-700 font-medium px-8 ${messages[currentMessage].animation}`}>
                {messages[currentMessage].text}
              </p>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {messages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentMessage 
                      ? 'bg-purple-600 w-8' 
                      : index < currentMessage 
                      ? 'bg-purple-400' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Hints */}
            {currentMessage === messages.length - 1 && (
              <div className="mt-12 animate-fade-in">
                <div className="flex justify-center space-x-8 text-purple-600">
                  <div className="flex items-center space-x-2">
                    <FaChevronLeft />
                    <span className="text-sm">See your gifts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">View memories</span>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}