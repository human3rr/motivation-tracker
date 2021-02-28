import ReactDOM from 'react-dom';
import React, { useState , useEffect} from 'react';
import DateTime from './DateTime';
import MotivationalPics from './MotivationalPics'

function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()), 1000
    )
  }, []);

  return (
    <div className="App">
    <DateTime time={time}/>
    <MotivationalPics/>
    </div>
  );
}

export default App;
