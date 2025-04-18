import { useState } from 'react'
import LogInPage from './componets/LogInPage/LogInPage.jsx'
import SearchPage from './componets/SearchPage/SearchPage.jsx';
import MatchPage from './componets/MatchPage/MatchPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/match_page" element={<MatchPage />} />


    
      </Routes>
    </BrowserRouter>







    </>
  )
}

export default App
