// interface Heart3DProps {
//   count: number
//   isExpanding?: boolean
// }

// export function Heart3D({ count, isExpanding = false }: Heart3DProps) {
//   const scale = 1 + (5 - count) * 0.1
//   const expandScale = isExpanding ? 15 : scale
  
//   return (
//     <div 
//       className={`relative transform-gpu perspective-1000 transition-all duration-1000 ${
//         isExpanding ? 'fixed inset-0 z-50 flex items-center justify-center' : 'w-64 h-64'
//       }`}
//     >
//       {/* 3D Heart Shape */}
//       <div 
//         className={`absolute inset-0 ${isExpanding ? '' : 'animate-heartbeat'} transform-gpu`}
//         style={{
//           transform: `scale(${expandScale})`,
//           transformStyle: 'preserve-3d',
//           transition: isExpanding ? 'transform 1s ease-in-out' : undefined
//         }}
//       >
//         {/* Main Heart */}
//         <div className="relative w-full h-full">
//           {/* Heart SVG with 3D effect - More realistic heart shape */}
//           <svg
//             viewBox="0 0 100 100"
//             className="w-full h-full filter drop-shadow-2xl"
//             style={{
//               transform: 'rotateY(15deg) rotateX(-10deg)'
//             }}
//           >
//             <defs>
//               <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#ff006e" />
//                 <stop offset="20%" stopColor="#ff4081" />
//                 <stop offset="50%" stopColor="#f50057" />
//                 <stop offset="80%" stopColor="#ff4081" />
//                 <stop offset="100%" stopColor="#ff006e" />
//               </linearGradient>
//               <radialGradient id="heartHighlight" cx="40%" cy="30%">
//                 <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
//                 <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
//               </radialGradient>
//               <filter id="glow">
//                 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                 <feMerge>
//                   <feMergeNode in="coloredBlur"/>
//                   <feMergeNode in="SourceGraphic"/>
//                 </feMerge>
//               </filter>
//             </defs>
            
//             {/* More anatomically correct heart shape */}
//             <path
//               d="M50,30 
//                  C45,20 35,15 25,20
//                  C15,25 10,35 15,45
//                  C20,55 30,65 50,85
//                  C70,65 80,55 85,45
//                  C90,35 85,25 75,20
//                  C65,15 55,20 50,30 Z"
//               fill="url(#heartGradient)"
//               filter="url(#glow)"
//               className="animate-pulse"
//             />
            
//             {/* Highlight for 3D effect */}
//             <ellipse cx="35" cy="35" rx="15" ry="10" fill="url(#heartHighlight)" />
//           </svg>

//           {/* 3D Shadow layers */}
//           {[...Array(5)].map((_, i) => (
//             <svg
//               key={i}
//               viewBox="0 0 100 100"
//               className="absolute inset-0 w-full h-full"
//               style={{
//                 transform: `translateZ(-${(i + 1) * 5}px) scale(${1 - i * 0.02})`,
//                 opacity: 0.2 - i * 0.04
//               }}
//             >
//               <path
//                 d="M50,30 
//                    C45,20 35,15 25,20
//                    C15,25 10,35 15,45
//                    C20,55 30,65 50,85
//                    C70,65 80,55 85,45
//                    C90,35 85,25 75,20
//                    C65,15 55,20 50,30 Z"
//                 fill="#ff006e"
//               />
//             </svg>
//           ))}

//           {/* Count Display */}
//           {!isExpanding && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span 
//                 className="text-6xl font-bold text-white animate-bounce"
//                 style={{
//                   textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)'
//                 }}
//               >
//                 {count}
//               </span>
//             </div>
//           )}

//           {/* Glow effect */}
//           <div className="absolute inset-0 rounded-full bg-pink-500 blur-3xl opacity-30 animate-pulse" />
//         </div>
//       </div>
//     </div>
//   )
// }

interface Heart3DProps {
  count: number
  isExpanding?: boolean
  loadingProgress?: number
}

export function Heart3D({ count, isExpanding = false, loadingProgress = 0 }: Heart3DProps) {
  const scale = 1 + (5 - count) * 0.1
  const expandScale = isExpanding ? 15 : scale
  
  return (
    <div 
      className={`relative transform-gpu perspective-1000 transition-all duration-1000 ${
        isExpanding ? 'fixed inset-0 z-50 flex items-center justify-center' : 'w-64 h-64'
      }`}
    >
      {/* 3D Heart Shape */}
      <div 
        className={`absolute inset-0 ${isExpanding ? '' : 'animate-heartbeat'} transform-gpu`}
        style={{
          transform: `scale(${expandScale})`,
          transformStyle: 'preserve-3d',
          transition: isExpanding ? 'transform 1s ease-in-out' : undefined
        }}
      >
        {/* Main Heart */}
        <div className="relative w-full h-full">
          {/* Heart SVG with 3D effect - More realistic heart shape */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full filter drop-shadow-2xl"
            style={{
              transform: 'rotateY(15deg) rotateX(-10deg)'
            }}
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff006e" />
                <stop offset="20%" stopColor="#ff4081" />
                <stop offset="50%" stopColor="#f50057" />
                <stop offset="80%" stopColor="#ff4081" />
                <stop offset="100%" stopColor="#ff006e" />
              </linearGradient>
              <radialGradient id="heartHighlight" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* More anatomically correct heart shape */}
            <path
              d="M50,30 
                 C45,20 35,15 25,20
                 C15,25 10,35 15,45
                 C20,55 30,65 50,85
                 C70,65 80,55 85,45
                 C90,35 85,25 75,20
                 C65,15 55,20 50,30 Z"
              fill="url(#heartGradient)"
              filter="url(#glow)"
              className="animate-pulse"
            />
            
            {/* Highlight for 3D effect */}
            <ellipse cx="35" cy="35" rx="15" ry="10" fill="url(#heartHighlight)" />
          </svg>

          {/* 3D Shadow layers */}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translateZ(-${(i + 1) * 5}px) scale(${1 - i * 0.02})`,
                opacity: 0.2 - i * 0.04
              }}
            >
              <path
                d="M50,30 
                   C45,20 35,15 25,20
                   C15,25 10,35 15,45
                   C20,55 30,65 50,85
                   C70,65 80,55 85,45
                   C90,35 85,25 75,20
                   C65,15 55,20 50,30 Z"
                fill="#ff006e"
              />
            </svg>
          ))}

          {/* Count Display or Loading Progress */}
          {!isExpanding && (
            <div className="absolute inset-0 flex items-center justify-center">
              {loadingProgress < 100 ? (
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1" style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)'
                  }}>
                    {loadingProgress}%
                  </div>
                  {/* <div className="text-xs text-white/90 font-medium" style={{
                    textShadow: '0 0 10px rgba(255,255,255,0.8)'
                  }}>
                    Loading memories...
                  </div> */}
                </div>
              ) : (
                <span 
                  className="text-6xl font-bold text-white animate-bounce"
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)'
                  }}
                >
                  {count}
                </span>
              )}
            </div>
          )}

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-pink-500 blur-3xl opacity-30 animate-pulse" />
        </div>
      </div>
    </div>
  )
}