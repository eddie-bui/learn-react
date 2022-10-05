import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Student } from './features/labs/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Student />
      <Footer></Footer>
    </div>
  )
}

export default App
