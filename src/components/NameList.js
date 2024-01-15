import React from 'react'
import Person from './Person'

  function NameList() {
    const names = ['Rishie', 'Clark', 'Diana', 'Rishie']
    const persons = [
        {
            id: 1,
            name: 'Rishie',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kiki',
            age: 12,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Pratham',
            age: 21,
            skill: 'Vue'
        },

    ]
    const nameList = names.map((name,index) =>
    <h2 key = {index} > {index} {name} </h2>)
  return (
    <div> {nameList} </div>
  )
}

export default NameList
