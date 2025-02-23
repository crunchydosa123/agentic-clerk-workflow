import './App.css'
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
//#035c87 blue
// #1b2536 gray, #8af603 green

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/' element={<Homepage />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
