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
import Notes from './components/NotesPage/Notes';

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
          <Route path="/notes" element={<InpForm />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/notes/search" element={<Notes/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
