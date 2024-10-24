import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [time, setTime] = useState(false);

  function start(){
    if(!time){
      setTime(true);
      setSec(() => sec + 1);
    }
  }

  function stop(){
    setTime(false);
  }

  function clearTime(){
    if(!time){
      setSec(0);
      setMin(0);
    }
  }

  function timer(){
    if (time){
      setTimeout(() => {
        setSec(() => sec + 1);
      }, 1000);
    }

    if(sec == 60){
      setMin(() => min + 1);
      setSec(0);
    }
  }

  useEffect(() => {
    timer();
  }, [sec])

  return (
    <>
      <h1>time app</h1>
      <h2>minutes: {min} secends: {sec}</h2>
      <h3 onMouseDown={start}>start</h3>
      <h3 onMouseDown={stop}>stop</h3>
      <h3 onMouseDown={clearTime}>clear</h3>
    </>
  )
}

export default App
