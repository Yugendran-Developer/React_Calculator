
import './App.css';
import {useState,useRef} from 'react';
function App() {
 var displayscreen = ""
 var outputscreen = ""

 const ref = useRef(0)
 const ref1= useRef(0)





  const display=(num)=>{                                
    outputscreen += num;
    ref1.current.value=outputscreen;
    
}

 const Calculate=()=>{
    try{
      ref.current.value=outputscreen;
      displayscreen = eval(outputscreen);
      ref1.current.value=displayscreen;
      outputscreen=displayscreen;
    }
    catch(err){
        alert("Invalid")
        console.log(err);
    }
}

const Clear=()=>{
    outputscreen = "";
    displayscreen = "";
    ref1.current.value="";
    ref.current.value="";
}

const del=()=>{
  
    var len=outputscreen.length;
    outputscreen = outputscreen.slice(0,len-1);
    ref1.current.value=outputscreen;
}
  return (
    <div className="App">
      <div className="container">
      <div className="calculator">
            <input type="text" placeholder="0" id="display-screen" ref={ref} />
            <input type="text" placeholder="0" id="output-screen" ref={ref1}/>
            <button onClick= {()=>{Clear()}} className="operations">cl</button>
            <button onClick={()=>{del()}} className="operations">DEL</button>
            <button onClick={()=>{display('%')}} className="operations">%</button>
            <button onClick={()=>{display('/')}} className="operations">/</button>
            <button onClick={()=>{display('7')}}>7</button>
            <button onClick={()=>{display('8')}}>8</button>
            <button onClick={()=>{display('9')}}>9</button>
            <button onClick={()=>{display('*')}} className="operations">*</button>
            <button onClick={()=>{display('4')}}>4</button>
            <button onClick={()=>{display('5')}}>5</button>
            <button onClick={()=>{display('6')}}>6</button>
            <button onClick={()=>{display('-')}} className="operations">-</button>
            <button onClick={()=>{display('1')}}>1</button>
            <button onClick={()=>{display('2')}}>2</button>
            <button onClick={()=>{display('3')}}>3</button>
            <button onClick={()=>{display('+')}} className="operations">+</button>
            <button onClick={()=>{display('.')}} className="operations">.</button>
            <button onClick={()=>{display('0')}}>0</button>
            <button onClick={()=>{Calculate()}} id="equal" className="operations">=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
