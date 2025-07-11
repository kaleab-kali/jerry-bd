
// import { useCountdown } from '../hooks/useCountDownContext'
// import { Heart3D } from './Heart3D'
// import { useRef, useState } from 'react'

// export function CountdownScreen() {
//   const { count, startCountdown, } = useCountdown()
//   const hasStarted = useRef(false)
//   const [isExpanding, setIsExpanding] = useState(false)

//   // Start countdown on mount without useEffect
//   if (!hasStarted.current) {
//     hasStarted.current = true
//     setTimeout(startCountdown, 100)
//   }

//   // Handle transition when countdown reaches 0
//   if (count === 0 && !isExpanding) {
//     setTimeout(() => setIsExpanding(true), 500)
//   }

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center">
//       {/* Background particles */}
//       {!isExpanding && (
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${5 + Math.random() * 5}s`
//               }}
//             >
//               <div className="w-2 h-2 bg-pink-400 rounded-full opacity-60 blur-sm" />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 3D Heart Container */}
//       <Heart3D count={count} isExpanding={isExpanding} />

//       {/* Countdown Text */}
//       {!isExpanding && (
//         <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-2xl font-bold text-purple-800 animate-pulse">
//             Get ready for something special...
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }



import { Heart3D } from './Heart3D'
import { useRef, useState } from 'react'
import { useImagePreloader } from '../hooks/useImagePreloader'
import { useCountdown } from '../hooks/useCountDownContext'

// Import the memories data to get all image URLs
const getAllImageUrls = (): string[] => {
  const memories = [
    "images/II.png", "images/I.png", "images/poem.png", "images/IV.png",
    "images/V.png", "images/VI.png", "images/B3.jpg", "images/B4.jpg",
    "images/B5.jpg", "images/B4.jpg", "images/B7.jpg", "images/B6.jpg",
    "images/VII.png", "images/100.mp4", "images/hair.png", "images/eye.jpeg",
    "images/3.jpg", "images/cheek.jpeg", "images/ear.jpeg", "images/nose.jpeg",
    "images/lips.png", "images/neck.jpg", "images/shoulder.png", "images/arm.mp4",
    "images/finger.jpg", "images/finger.mp4", "images/heart.png", "images/back.jpg",
    "images/hand.png", "images/hips.mp4", "images/leg.jpeg", "images/feet.jpeg",
    "images/skin.mp4", "images/voice.mp4", "images/laugh.jpeg", "images/1.jpg",
    "images/freak.MP4", "images/100.mp4", "images/freak.MP4"
  ]
  
  // Add some external URLs that might be used as fallbacks
  const externalUrls = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  ]
  
  return [...memories, ...externalUrls]
}

export function CountdownScreen() {
  const { count, startCountdown, isComplete, loadingProgress, setLoadingProgress } = useCountdown()
  const hasStarted = useRef(false)
  const [isExpanding, setIsExpanding] = useState(false)
  const { preloadMedia, progress } = useImagePreloader()
  const preloadStarted = useRef(false)

  // Start preloading images immediately
  if (!preloadStarted.current) {
    preloadStarted.current = true
    const urls = getAllImageUrls()
    preloadMedia(urls).then(() => {
      console.log('All media preloaded!')
    })
  }

  // Update loading progress in context
  if (progress.percentage !== loadingProgress) {
    setLoadingProgress(progress.percentage)
  }

  // Start countdown only after loading is complete
  if (!hasStarted.current && progress.isComplete) {
    hasStarted.current = true
    setTimeout(startCountdown, 500)
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
      <Heart3D count={count} isExpanding={isExpanding} loadingProgress={loadingProgress} />

      {/* Countdown Text */}
      {!isExpanding && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-2xl font-bold text-purple-800 animate-pulse">
            {loadingProgress < 100 ? 'Preparing your surprise...' : 'Get ready for something special...'}
          </p>
        </div>
      )}
    </div>
  )
}