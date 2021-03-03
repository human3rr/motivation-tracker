import ReactDOM from 'react-dom';
import React, { useState , useEffect} from 'react';
import DateTime from './DateTime';
import MotivationalPics from './MotivationalPics'
import Todo from './Todo'
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
    <DateTime time={time}/>
    <Todo/>
    <Todo/>
    </div>
  );
}

export default App;
