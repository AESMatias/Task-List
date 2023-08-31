import React from 'react'
import bootstrapped from 'bootstrap';
import "../styles/TaskCard.css";

const TaskCard = ({object,indexTask}) => { 

    const { id, title ,description , key} = object;
console.log(indexTask)
    if(title!='' && title!="null") return (
       <div className={"task-card"}>
           <h3>{title}</h3>
           <p >{description}</p>
       </div>

  )
}
export default TaskCard