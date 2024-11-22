
// import { useState } from 'react'
// import './App.css'

import { useState } from "react"

// function App() {
//   return (
//    <>
//    <Parent />
//    </>
//   )
// }

// const Parent = () => {
//   const [count, setcount] = useState(0)
//   function increase(){
//     setcount(c => c + 1)
//   }
//   return(
//     <div>
//       {count} <br />
//       <button onClick={increase}>Increase</button>
//       <button onClick={()=>{setcount( c => c - 1)}}>decrease</button>
//     </div>
//   )
// }

// export default App




// Toggle Visibility

// import { useState } from 'react'
// import './App.css'

// function App() {
//   return (
//    <>
//    <Parent />
//    </>
//   )
// }

// const Parent = () => {

//   const[isvisible, setisvisible] = useState(true)

//   function toggle(){
//     setisvisible(prev => !prev);
//   }

//   return <div>
//     <button onClick={toggle}>toggle</button> <br />
//     {isvisible && "hello satish"}
//   </div>
// }

// export default App



// Dynamic Input Tracker

// function App() {
//     return (
//      <>
//      <Parent />
//      </>
//     )
//   }
  
//   const Parent = () => {
//    const[text, settext] = useState("");
    
//    function display(e){
//     settext(e.target.value)
//    }

//     return(
//       <div>
//        <input type="text" onChange={display} /> <br />
//        {text}
//       </div>
//     )
//   }
  
//   export default App


// color changer

// function App() {
//   return (
//    <>
//    <Parent />
//    </>
//   )
// }

// const Parent = () => {
// const[color, setcolor] = useState("white") 

//   function red(){
//     setcolor("red")
//   }
//   function blue(){
//     setcolor("blue")
//   }
//   function green(){
//     setcolor("green")
//   }
//   return(
//     <div style={{backgroundColor: color, padding: "10px"}}>
//       <button onClick={red}>red</button>
//       <button onClick={blue}>blue</button>
//       <button onClick={green}>green</button>
//     </div>
//   )
// }

// export default App


// simple to-do list

// function App() {
//   return (
//    <>
//    <Parent />
//    </>
//   )
// }

// const Parent = () => {
// const[todo, settodo] = useState([]);

// function Addtodos(){
//   const newtodo = {
//    first_name : "satish",
//    Last_name: "choudhary",
//    title: "go to gym"
//   }
//   settodo((prev) => [...prev, newtodo])
// }

//   return(
//     <div>
//      <button onClick={Addtodos}>Add todo</button> <br />
//      {todo.map((item, index)=>(
//       <div key={index}> {item.first_name} {item.Last_name} {item.title}</div>
//      ))}
//     </div>
//   )
// }

// export default App


// switch theme 

// function App() {
//   return (
//    <>
//    <Parent />
//    </>
//   )
// }

const Parent = () => {
const[theme, settheme] = useState("light");

function toggle(){
  settheme(prev => (prev === "light" ? "dark": "light"));
}
  return(
    <div style={{background: theme === "light" ? "white" : "black", padding: "20px"}}>
    <button onClick={toggle}>change theme</button>
    </div>
  )
}

export default App