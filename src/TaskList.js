import React, { useState } from 'react';

function TaskList (props) {
  return(
    <div>
    {props.todoItems.map( (item) => {
        return (
          <div>
          <li display="inline">{item.todolist}</li>
          <button type="button">delete</button>
          </div>
        )
    })}
    </div>
  )
}
export default TaskList;
