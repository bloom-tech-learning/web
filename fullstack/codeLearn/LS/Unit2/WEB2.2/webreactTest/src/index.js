
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";


// function User(props){
//   // const [user, setUser] = useState("");
//   const { id } = props
//   console.log("##" + id)

// const JXS = (
//   <div>
//     <button >Get User</button>
//   </div>
// );
  
//   return JXS;
// }




function App(props) {  
  // const {cohort, name, age, week} =props
  console.log("props.oobjs.a = " + props.oobjs.a)
  console.log(props)
  console.log(Object.keys(props.oobjs))
  // props.map( (objs) => { 
  //   return console.log(oobjs)
  // }) 

  // for (const key in props.oobjs) {
  //   console.log(key)
  // }
  for (const key in props.oobjs) {
      console.log(props.oobjs[key])
    }
  
  return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Hello, {props.name}, you are {props.age}</p>
      <div>It is week {props.week}</div>

      { 
      // props.map( (objs) => { 
      //   return <User obj = {obj[key]} />
      // }) 
      }

   {/* {   friends.map((fr, idx) => {
          return <Friend besty={idx % 2 === 0} key={fr.id} info={fr} action={openDetails} />
        })} */}

      {/* <Playground /> */}
      {/* <Playground userLoggedIn = "false" /> */}
      {/* <Playground userLoggedIn = "true" /> */}
      {/* <Playground userLoggedIn = {true} userLoggedOut = "" /> */}
    </div>
  )
}

const objs = {a:{cohort: '37', name: 'Casey', age: '74', week: 2}, c:{cohort: '55', name: 'ggg', age: '89', week: 5}}
const rootElement = document.getElementById("root");
ReactDOM.render(
  // <App cohort='37' name = 'Casey' age = '74' week={2}/>,
  <App oobjs ={objs}/>,
  rootElement
  );

