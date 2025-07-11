import { createContext, useContext, useState, type ReactNode } from 'react'

export type PageType = 'wish' | 'gift' | 'memories'

interface NavigationContextType {
  currentPage: PageType
  setCurrentPage: (page: PageType) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentPage, setCurrentPage] = useState<PageType>('wish')

  const value: NavigationContextType = {
    currentPage,
    setCurrentPage
  }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigationContext() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider')
  }
  return context
}