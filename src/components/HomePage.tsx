import { useNavigation } from '../hooks/useNavigation'

import { WishPage } from './WishPage'
import { GiftPage } from './GiftPage'
import { MemoriesPage } from './MemoriesPage'
import { BottomNavigation } from '../contexts/BottomNavigation'

export function HomePage() {
  const { currentPage } = useNavigation()

  const renderPage = () => {
    switch (currentPage) {
      case 'wish':
        return <WishPage />
      case 'gift':
        return <GiftPage />
      case 'memories':
        return <MemoriesPage />
      default:
        return <WishPage />
    }
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="h-full pb-24">
        {renderPage()}
      </div>
      <BottomNavigation />
    </div>
  )
}