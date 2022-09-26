  import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
const c  = 3;




function App() {
let [txt,settxt] = useState("abc");
let [list,setList] = useState([]);
// let txt = ""
// let list = [];


  function add(){
    list.push(txt)
    console.log(list);
    setList([...list])
  }
  function del(i){
    const txtList = [...list];
    txtList.splice(i,1)
    setList([...txtList])

  }
  function edit(i){
    let a = prompt("Enter new text","YOU ARE CUTE");
    list[i] = a;
    settxt(a)
    // settxt([...txt]
    // )
    
    

  }
  function remove(){
  list = "";
  setList([...list])
  } 
   return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO App</h1>
        {/* <h1>Fatima zohra</h1>
        <p>hello world</p>
        <p>the square of {c} is {c*c}</p> */}
        <input className='no' onChange={(e)=> {
          settxt(e.target.value);
          console.log(txt);
        }}/>     
        <button className='yes' onClick={add}>ADD</button> 
        <button className='yes' onClick={remove}>Remove all</button> 
        {/* <Button btnValue = "abc" className='yes'/>   */}
        {/* <Button btnValue = "abc" className='no'/>   */}
        <ul>
          {list.map((e,i)=> {
            return <li style = {{
// color: "blue",
// backgroundColor: "lightcyan",
}}
key={i}>{e}
<Button btnValue="Delete" className="yes" click={()=>del(i)}/>
<Button btnValue="Edit" className="yes" click={()=>edit(i)}  />
</li>

          })}
        </ul>
      </header>
    </div>
  );
}

export default App;


// how to edit text from toddo list?

