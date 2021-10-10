import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Playground from './components/Playground';

  function App(props) {
  console.log('dataObjs in App: ', dataObjs);
  console.log('props.appData: ', props.appData);
  console.log('List props.appData keys by Object.key(): ',Object.keys(props.appData));

  for (const key in props.appData) {
    console.log('method of for key in  props.appData[key]: ', props.appData[key]);
  }

  Object.keys(props.appData).map((key) => {
    //console.log(key)
    
    console.log('appData in map: ', props.appData[key]); 
  })

  function Child(props){
    // const [user, setUser] = useState("");
    const {id}=props;
    console.log("Child = ", id, props.obj);
  
  const JXS = (
    <div>
      <button >child {id}, which has a name of:{props.obj.name}</button>
    </div>
  );    
    return JXS;
  }

  return (
    <div className='container'>
     
        <h1>Hello</h1>
        <p> Father </p>
        {
            Object.keys(props.appData).map((key, i) => {
            return <Child  obj = {props.appData[key]} id ={i}  />
            })  
        }               
    </div>
  )
}

const dataObjs = {
  ls221: {
    cohort: '221',
    name: 'Casey',
    sex: 'M',
    age: '74',
    logIn: false
  },
  ls222:{
    cohort: '222',
    name: 'Rongjun',
    sex: 'M',
    age: '54',
    logIn: false
  },
  ls223:{
    cohort: '223',
    name: 'weijie',
    sex: 'F',
    age: '46',
    logIn: true
  },
}

render(
  <App appData = {dataObjs} />,
  document.querySelector('#root')
)




 