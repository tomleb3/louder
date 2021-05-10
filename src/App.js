import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { MediaPlayer } from './cmps/MediaPlayer.jsx';

export function App() {
  return (
    <main className="App">
      <AppHeader />
      <Switch>
        <Route path="/player" component={MediaPlayer} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}