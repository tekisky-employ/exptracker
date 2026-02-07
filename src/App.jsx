import React, { useState } from 'react'
import './Style/App.css'

function App() {

  const [input,setInput]=useState('')
  const [amount,setAmount]=useState('')
  const [expenceses,setExpenceses]=useState([])

  const addExpence=()=>{
    if (!input || !amount) return
    
    const newEpenceses={
      id: expenceses.length +1,
      title:  input,
      amount: Number(amount)
    }
    setExpenceses([...expenceses,newEpenceses]);
    setInput('')
    setAmount('')
  }

  const deleteExpence=(id)=>{
    setExpenceses(expenceses.filter((exp)=> exp.id !== id))

  }
  const totalAmount = expenceses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className='container'>
      <h2>Expence Tracker</h2>
       <h3>Total: ₹{totalAmount}</h3>
      <div>
        <input type="text" placeholder='Expence'onChange={(e)=>setInput(e.target.value)} value={input}/>
        <input type="number" placeholder='Amount' onChange={(e)=>setAmount(e.target.value)} value={amount}/>
        <button onClick={addExpence}>Add Expence</button>
      </div>
      <ul>
        {
          expenceses.map((expences)=>(
            <li key={expences.id}>
              <span>{expences.title}</span>
              <span>{expences.amount}</span>
              <button onClick={()=> deleteExpence(expences.id)}>delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App