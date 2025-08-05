



import React,{useState} from 'react';
import './App.css';
import Questions from './Questions.json';
import Display from './Display';
import './App.css'

const App = () => {
  let tempMarks = []
  const[marks,setMarks] = useState([]);
  const changeHandler = (value,index) =>{
    tempMarks = marks;
    tempMarks[index]= value;
    setMarks([...tempMarks]);
  }
  return (
    <div>
      <center>
        <h1>Quiz Application</h1>
       {Questions.map((question,index) => {
              return(
               <Display question={question} index={index} changeHandler={changeHandler}/>
              )
       })
       }
       <button  onClick={() => alert(marks.reduce((a,b)=> a+b,0))}>End Quiz</button>
      </center>
    </div>
  );
}

export default App;
