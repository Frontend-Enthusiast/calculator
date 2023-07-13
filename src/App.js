import ShortUniqueId from 'short-unique-id';
import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
// let history = [];
function App() {
  const[digit,setDigit] = useState("");
  const[result,setResult] = useState("");
  let buttons1 = [7,8,9,"/",4,5,6,"*",1,2,3,"+",0,".","=","-"];
  const uid = new ShortUniqueId({length:4});
  const handleClick = (e)=>{
    if(Number.isInteger(e)){
      setDigit((digit)=>[...digit,e]);
    }
    else{
      if(e==="+"){
        setDigit((digit)=>[...digit,e]);
      }
      else if(e==='-'){
        setDigit((digit)=>[...digit,e]);
      }
      else if(e==='*'){
        setDigit((digit)=>[...digit,e]);
      }
      else if(e==='/'){
        setDigit((digit)=>[...digit,e]);
      }
      else if(e==='%'){
        setDigit((digit)=>[...digit,e]);
      }
      else if(e==='='){
        const input = digit.join("");
        const res = evaluate(input);
        setResult(res);
        // history.push({"expression":{input},"ans":{res}});
        // console.log(history);
      }
      else if(e==='.'){
        setDigit((digit)=>[...digit,e]);
      }
      else if(e==='CLEAR'){
        setDigit("");
        setResult("");
      }
      else if(e==='BACK'){
        setDigit(digit.slice(0,-1));
      }
    }
  }
  return (
    <div className="App">
      <div className='header'>{digit}</div>
      <input type='text' className='Result' value={result} readOnly={true}/>
      <div className='keypad'>
      {buttons1.map((item)=>(
            <button key={uid()} onClick={()=>handleClick(item)} className='btn'>{item}</button>
          ))}
      </div>
      <div className='lowerButtons'>
        <button className='clear btn' onClick={()=>handleClick('CLEAR')}>CLEAR</button>
        <button className='clear btn' onClick={()=>handleClick('BACK')}>BACK</button>
        {/* <button className='clear btn' onClick={()=>handleClick('HISTORY')}>HISTORY</button> */}
      </div>
    </div>
  );
}

export default App;
