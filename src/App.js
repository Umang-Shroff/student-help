import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
