import React, { useState } from 'react';
import './taskList.css'
function TaskList (props) {

  function deleteHandler(){
    props.setTodoItems( props.todoItems.filter((ele) =>
    ele.id !== props.item.id
  ))
  }

  return(
    <div>
          <div className="task">
            <li className="taskele">{props.item.todolist}</li>
            <button type="button" onClick={deleteHandler}>X</button>
          </div>
    </div>
  )
}
export default TaskList;
