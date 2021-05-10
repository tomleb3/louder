import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
  return (
    <main className="App">
      <AppHeader />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </main>
  )
}