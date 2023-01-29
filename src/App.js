// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Quotes from './components/Quotes';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='links'>
          <NavBar />
        </div>
        <Routes>
          <Route path = "/" element = {< Home />} />
          <Route path = "/quotes" element = {< Quotes />} />
          <Route path = "/about" element = {< About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
