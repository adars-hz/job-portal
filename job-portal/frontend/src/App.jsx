import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import StudentDashboard from './components/StudentDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path='/studentdashboard' element={<StudentDashboard/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
