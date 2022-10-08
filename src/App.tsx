import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { StudentCard } from './features/labs/Student'
import { Student } from './models/student'

function App() {
  const [count, setCount] = useState(0)
  const john: Student = {
    name: 'John Davis',
    age: 3,
    gender: true,
  }
  return (
    <div>
      <Header></Header>
      <StudentCard student={john} />
      <Footer></Footer>
    </div>
  )
}

export default App
