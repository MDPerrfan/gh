import Home from './pages/Home'
import Loading from './components/layout/Loading'
import { useState } from 'react'
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Loading onComplete={() => setIsLoading(false)} />
      )}
      <div className={isLoading ? "overflow-hidden h-screen" : ""}>
        <Home />
      </div>
    </>
  )
}
