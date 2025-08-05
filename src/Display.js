


import React from 'react'

const Display = ({question,index,changeHandler}) => {
    const handler = e=>{
        let temp =  question.answer === e.target.value ? 1 : 0;
       changeHandler(temp,index);
    }
  return (
            
    <div style={{"textAlign":"left","border": "1px solid black","margin":"4px","padding":"1px"}}>
            <div className="card">
                <div className="card-body">
                    
        <h4 className="card-title">{question.title}</h4>
            <div onChange={handler}> 
                <input type="radio" value="A"  name={index}/> {question.options[0]} &nbsp;
                <input type="radio" value="B" name={index} /> {question.options[1]} &nbsp;
                <input type="radio" value="C" name={index} /> {question.options[2]} &nbsp;
                <input type="radio" value="D" name={index} /> {question.options[3]} &nbsp;
            </div>
    </div>
    </div>
    </div>
  )
}

export default Display