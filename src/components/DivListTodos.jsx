import React from 'react';
import TaskCard  from './TaskCard';
import "../styles/DivListTodos.css";

// row = this.props.cells.map(function(cell, i) {
//     return (
//         if(cell.URL != null && cell.URL.length > 0){
//             <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>        
//         }
//         else {
//             <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>
//         }
//     );

// downtaskitem.map((object2) => 
// (<TaskCard object={object2} key={object2.id}/>) 
// )

export function DivListTodos({ downtaskitem, indexTask}) {


if( downtaskitem[indexTask].title!=null )return (
    <div className='CardContainer'>
        {
        downtaskitem.map((object2) => 
        (<TaskCard indexTask={indexTask} object={object2} key={object2.id}/>) 
        )
        }
    </div>
  )
}