import * as React from 'react'

export interface StudentProps {
  name: string
  age: number
  gender: boolean
}

export function Student({ name = 'Defaut' }: StudentProps) {
  return <div>Stundent: {name} </div>
}
