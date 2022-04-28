import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route exact path={"/news/:id/:category"} element={<News />} />
        <Route exact path={"/news"} element={<News />} />
        <Route exact path={"/contact"} element={<Contact />}  />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/"} element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
