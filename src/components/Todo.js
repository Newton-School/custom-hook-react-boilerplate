import React from "react"
export const Todo = ({id,title,completed}) => {
    return(
      <div id={`todo-${id}`} style={{border:"4px solid red",margin:"0.65rem"}}>
        <div className='todo-title'>{title}</div>
        <div className='todo-status'>{completed ? "Done" : "Incomplete"}</div>
      </div>
    )
  }