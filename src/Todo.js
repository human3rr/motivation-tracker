import React, { useState } from 'react';
import TaskList from './TaskList'
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
      ...todoItems,{todolist:mtext}
    ])
    setText({tinput: ''});
    event.preventDefault();
  }

  return(
  <div>

  <form >
  <label>
    Task:
    <input type="text" value={text.tinput} onChange={handleChange} />
  </label>
  <input type="submit" value="Enter" onClick={handleSubmit}/>
</form>
<TaskList todoItems={todoItems} setTodoItems={setTodoItems}/>
  </div>
)
}
//<TaskList todoItems={todoItems} setTodoItems={setTodoItems}/>
export default Todo;
