import { useEffect, useState } from 'react'
import './App.css'
import { Widget } from './components/common'

import { MyText } from './features/labs/MyText'
import { StudentCard } from './features/labs/Student'
import { MainLayout } from './Layout'
import { Student } from './models/student'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[])

  const john: Student = {
    name: 'John Davis',
    age: 3,
    gender: true,
  }

  function handleStudentClick() {
    console.log('student click')
  }

  // if (loading) return <p>loading...</p>

  return (
    <div>
      {/* {loading ? <p>Loading...</p> : null} */}
      {loading && <p>Loading...</p>}
      <MainLayout>
      <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>
      <MyText>abc</MyText>
      <MyText>{123}</MyText>
      <MyText>abc</MyText>
      <MyText>abc</MyText>
      <MyText>abc</MyText>
      <MyText>abc</MyText>
      <div>
        <div>
          <Widget title='Earning Overview'>Chart 1</Widget>
        </div>
        <div>
          <Widget title='Earning Overview'>Chart 2</Widget>
        </div>
        <div>
          <Widget title='Earning Overview'>Chart 3</Widget>
        </div>
        <div>
          <Widget title='Earning Overview'>Chart 4</Widget>
        </div>
      </div>
    </div>
  )
}

export default App
