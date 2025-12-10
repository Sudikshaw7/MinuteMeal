import { useState } from 'react'
import './App.css'
import Data from './Pages/Data'
import Navbar from '../Component/Navbar'
import { React } from 'react-router-dom';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Data />
    <Navbar />
    </>
  )
}

export default App
