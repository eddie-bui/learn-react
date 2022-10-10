import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { MyText } from './features/labs/MyText'
import { StudentCard } from './features/labs/Student'
import { Student } from './models/student'

function App() {
  const [count, setCount] = useState(0)
  const john: Student = {
    name: 'John Davis',
    age: 3,
    gender: true,
  }

  function handleStudentClick() {
    console.log('student click')
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} onClick={handleStudentClick} />
      <MyText>abc</MyText>
      <MyText>{123}</MyText>
      <MyText>abc</MyText>
      <MyText>abc</MyText>
      <MyText>abc</MyText>
      <MyText>abc</MyText>
      <Footer></Footer>
    </div>
  )
}

export default App
