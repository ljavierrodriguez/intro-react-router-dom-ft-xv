import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/navbar';
import About from './views/about';
import Contact from './views/contact';
import NotFound from './views/notfound';
import News from './views/news';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/news/:id/:category"} component={News} />
        <Route exact path={"/news"} component={News} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/"} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
