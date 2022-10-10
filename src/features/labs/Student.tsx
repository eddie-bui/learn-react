import * as React from 'react'
import { Student } from '../../models/student'

export interface StudentCardProps {
  student: Student
  onClick?: () => void
}

export function StudentCard({student, onClick}: StudentCardProps) {
  let { name, age } = student



  return <div onClick={onClick}> Stundent: {name} is {age} years old</div>
}
