import './App.css';
import Navbar from './components/LandingPage/Navbar';
import Home from './components/LandingPage/Home';
import Features from './components/LandingPage/Features';
import About from './components/LandingPage/About';
import Footer from './components/LandingPage/Footer';
import NewsLetter from './components/LandingPage/NewsLetter';
import NoPage from './components/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InpForm from './components/NotesPage/InpForm';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/>
      <Features/>
      <About/>
      <NewsLetter/>
      <Footer/> */}
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notes" element={<InpForm />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
