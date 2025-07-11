import { FaGift, FaHeart, FaImages } from 'react-icons/fa'
import { useNavigation } from '../hooks/useNavigation'
import { type PageType } from '../contexts/NavigationContext'

export function BottomNavigation() {
  const { currentPage, setCurrentPage } = useNavigation()

  const navItems: { page: PageType; icon: React.ReactNode; label: string }[] = [
    { page: 'gift', icon: <FaGift className="w-6 h-6" />, label: 'Gifts' },
    { page: 'wish', icon: <FaHeart className="w-6 h-6" />, label: 'Wishes' },
    { page: 'memories', icon: <FaImages className="w-6 h-6" />, label: 'Memories' }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 px-4 pb-4 z-50">
      <nav className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 max-w-md mx-auto">
        <div className="px-2 py-1">
          <div className="flex justify-around items-center relative">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`
                  relative flex flex-col items-center justify-center py-3 px-6 transition-all duration-300
                  ${item.page === 'wish' ? 'transform -translate-y-2' : ''}
                `}
              >
                {/* Special styling for middle button (wish) */}
                {item.page === 'wish' ? (
                  <div className="absolute -top-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-transform">
                    <div className="relative">
                      <div className={`text-white ${currentPage === item.page ? 'animate-pulse' : ''}`}>
                        {item.icon}
                      </div>
                      {currentPage === item.page && (
                        <div className="absolute -inset-2 bg-white/30 rounded-2xl blur-xl animate-pulse" />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div 
                      className={`
                        ${currentPage === item.page ? 'text-purple-600' : 'text-gray-600'}
                        hover:text-purple-600 transition-colors transform hover:scale-110
                      `}
                    >
                      {item.icon}
                    </div>
                    {currentPage === item.page && (
                      <div className="absolute -inset-2 bg-purple-400/20 rounded-full blur-md" />
                    )}
                  </div>
                )}
                
                <span 
                  className={`
                    text-xs mt-1 font-medium
                    ${currentPage === item.page ? 'text-purple-700' : 'text-gray-600'}
                    ${item.page === 'wish' ? 'mt-6' : ''}
                  `}
                >
                  {item.label}
                </span>

                {/* Active indicator */}
                {currentPage === item.page && item.page !== 'wish' && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-purple-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}