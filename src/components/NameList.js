import React from 'react'
import Person from './Person'

  function NameList() {
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
    const personList = persons.map(person => 
    <Person person = {person}></Person>
        )
  return (
    <div> {personList} </div>
  )
}

export default NameList
