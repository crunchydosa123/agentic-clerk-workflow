import './App.css'
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Chat from './pages/Chatpage';
import Dashboardpage from './pages/Dashboardpage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
//#035c87 blue
// #1b2536 gray, #8af603 green

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/chat' element={<Chat />} />
      <Route path='/dashboard' element={<Dashboardpage />} />
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
