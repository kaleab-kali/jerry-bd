import { CountdownProvider } from './contexts/CountdownContext'
import { NavigationProvider } from './contexts/NavigationContext'
import { CountdownScreen } from './components/CountdownScreen'
import { HomePage } from './components/HomePage'

import './App.css'
import { useCountdown } from './hooks/useCountDownContext'

function AppContent() {
  const { isComplete } = useCountdown()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 overflow-hidden">
      {!isComplete ? <CountdownScreen /> : <HomePage />}
    </div>
  )
}

function App() {
  return (
    <CountdownProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </CountdownProvider>
  )
}

export default App