import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem';

function App() {

  
  let [mycolor, setcolor]=useState({backgroundColor:"hsl(206,94%,92%)"});
 

  function clickcolor(event){
    if(event.target.name==="btn1")
       {setcolor({backgroundColor:"#fffe7a"});
       }
    else if(event.target.name==="btn2")
       {setcolor({backgroundColor:"#98FB98"});}
    else if(event.target.name==="btn3")
       {setcolor({backgroundColor:"#CCCCFF"});}
    else if(event.target.name==="btn4")
       {setcolor({backgroundColor:"#FFA07A"});}
    else if(event.target.name==="btn5")
       {setcolor({backgroundColor:"#AFEEEE"});}   
    }
  
  return (
    <div className="body">
      <div className="main" style={mycolor}>
        <div className="color">
        <button id="btn1" name="btn1" onClick={clickcolor} ></button>
        <button id="btn2" name="btn2" onClick={clickcolor} ></button>
        <button id="btn3" name="btn3" onClick={clickcolor}></button>
        <button id="btn4" name="btn4" onClick={clickcolor} ></button>
        <button id="btn5" name="btn5" onClick={clickcolor} ></button>
        </div>
       <h2>📝to-do list</h2>
       <AddItem/>
    </div>
    </div>
  );
}

export default App;
