import { useState } from 'react'
import Balloon from './components/Balloon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Balloon />
    </>
  )
}

export default App
