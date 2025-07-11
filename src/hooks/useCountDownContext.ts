// import { useCountdownContext } from '../contexts/CountdownContext'

// export function useCountdown() {
//   const { count, isComplete, startCountdown, resetCountdown } = useCountdownContext()
  
//   return {
//     count,
//     isComplete,
//     startCountdown,
//     resetCountdown
//   }
// }

import { useCountdownContext } from '../contexts/CountdownContext'

export function useCountdown() {
  const { count, isComplete, startCountdown, resetCountdown, loadingProgress, setLoadingProgress } = useCountdownContext()
  
  return {
    count,
    isComplete,
    startCountdown,
    resetCountdown,
    loadingProgress,
    setLoadingProgress
  }
}