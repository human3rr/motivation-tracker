import ReactDOM from 'react-dom';
import React, { useState , useEffect} from 'react';
import DateTime from './DateTime';
import MotivationalPics from './MotivationalPics'
import Todo from './Todo'
import Weather from './Weather'

import './taskList.css'
function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()), 1000
    )
  }, []);
//<MotivationalPics/>
  return (
    <div className="App">

    <DateTime className="dateTime" time={time}/>
    <Todo className="goals" taskTitle="Goals"/>
    <Todo className="tasks" taskTitle="Tasks"/>
    <MotivationalPics className="motivation"/>
    <Weather/>

    </div>
  );
}

export default App;
