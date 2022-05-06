import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './lib/font-awesome/css/all.min.css'
import './App.css';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import MyTop from './components/MyTop';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><AlbumList /></Route>
        <Route exact path="/mytop"><MyTop /></Route>
        <Route exact path="/add"><Add /></Route>
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
