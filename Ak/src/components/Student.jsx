import React from 'react'

function Student(props) {
  return (
    <div>
      <h1>Name is {props.name}</h1>
      <p>Age is {props.age}</p>
    </div>
  )
}

export default Student
