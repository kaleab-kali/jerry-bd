import { createContext, useContext, useState, useCallback, useRef, ReactNode } from 'react'

interface CountdownContextType {
  count: number
  isComplete: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

const CountdownContext = createContext<CountdownContextType | undefined>(undefined)

interface CountdownProviderProps {
  children: ReactNode
}

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [count, setCount] = useState(5)
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const startCountdown = useCallback(() => {
    if (intervalRef.current) return
    
    intervalRef.current = window.setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          // Delay the completion to allow for heart expansion animation
          setTimeout(() => setIsComplete(true), 1500)
          return 0
        }
        return prevCount - 1
      })
    }, 1000)
  }, [])

  const resetCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCount(5)
    setIsComplete(false)
  }, [])

  const value: CountdownContextType = {
    count,
    isComplete,
    startCountdown,
    resetCountdown
  }

  return (
    <CountdownContext.Provider value={value}>
      {children}
    </CountdownContext.Provider>
  )
}

export function useCountdownContext() {
  const context = useContext(CountdownContext)
  if (context === undefined) {
    throw new Error('useCountdownContext must be used within a CountdownProvider')
  }
  return context
}