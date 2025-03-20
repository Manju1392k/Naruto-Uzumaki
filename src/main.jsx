import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import AllCharactors from './Components/AllCharactors.jsx'
import Header from './Components/UI/Header.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  {/* Showing Header in every page to play the music countinuously, Even when the page is redirect. */}
  <Header />
    <Routes>
      {/* Home page path. */}
      <Route path="/" element={<App />} />
      {/* AllCharactors page path. */}
      <Route path="/AllCharactors" element={<AllCharactors />} />
    </Routes>
  </BrowserRouter>

  </StrictMode>,
)
