import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [values, setValue] = useState("")
  
  const count = useRef(0)
  const refInput = useRef('')
 


  useEffect( ()=>{
    count.current = count.current +1
  })
  useEffect(() => {
    refInput.current = values
  },[values])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>state :{values}</p>
        <h2>ref val: {refInput.current}</h2>
        <p>count :{count.current}</p>
        <input value={values} onChange={(e)=> {setValue(e.target.value)}}></input>
      </header>
    </div>
  );
}

export default App;
