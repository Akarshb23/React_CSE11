import React from 'react'

function Std({name,course,marks}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Course : {course}</p>
      <p>Marks : {marks}</p>
    </div>
  )
}

export default Std
