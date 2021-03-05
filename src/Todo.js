import React, { useState } from 'react';
import TaskList from './TaskList'
import './taskList.css'

function Todo (props) {

  const [text, setText] = useState({tinput: ""});
  const [todoItems, setTodoItems] = useState([]);

  function handleChange(event){
    setText( {tinput: event.target.value})
    return 0;
  }
  function handleSubmit(event){
    const mtext = text.tinput;
    setTodoItems([
      ...todoItems,{todolist:mtext, id:Math.random()*1000}
    ])
    setText({tinput: ''});
    event.preventDefault();
  }

  return(
  <div>

  <form className="todoForm">
  <label>
    {props.taskTitle}
    <input type="text" value={text.tinput} className="textField" onChange={handleChange} />
  </label>
  <input type="submit" value="Enter" className="enterBtn" onClick={handleSubmit}/>
</form>
<div className="taskContainer">{
  todoItems.map( (item, index) => {
    return <TaskList key={item.id} item={item} index={index} todoItems={todoItems} setTodoItems={setTodoItems}/>
  }
)}
</div>
  </div>
)
}
//<TaskList todoItems={todoItems} setTodoItems={setTodoItems}/>
export default Todo;
