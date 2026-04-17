import Greeting from './components/Greeting.jsx'
import Student from './components/Student.jsx'
import Std from './components/Std.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <Greeting/><br></br>
      <Student name={'Akarsh'} age={35}/>
      <Std name={'Rahul Sharma'} course={"Computer science"} marks={85}/>
      <Std name={'Anita Verma'} course={"Information Technology"} marks={92}/>
      <Std name={'Rohan Gupta'} course={"Electronics"} marks={78}/>
    </>
  )
}

export default App
