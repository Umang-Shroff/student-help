import './App.css';
import Navbar from './components/LandingPage/Navbar';
import Home from './components/LandingPage/Home';
import Features from './components/LandingPage/Features';
import About from './components/LandingPage/About';
import Footer from './components/LandingPage/Footer';
import NewsLetter from './components/LandingPage/NewsLetter';

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
