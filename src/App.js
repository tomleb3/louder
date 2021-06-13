import { Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { createContext, useRef } from 'react'

export const PlayerContext = createContext(null)

export function App() {

  const audioRef = useRef(null)

  return (
    <main className="App">
      <PlayerContext.Provider value={{ audioRef }}>
        <AppHeader />
        <Route path="/" exact component={Home} />
      </PlayerContext.Provider>
    </main>
  )
}