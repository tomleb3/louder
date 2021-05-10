import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { TrackDetails } from './cmps/TrackDetails.jsx'

export function App() {
  return (
    <main className="App">
      <AppHeader />
      <Switch>
        <Route path="/track/:id" component={TrackDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  )
}