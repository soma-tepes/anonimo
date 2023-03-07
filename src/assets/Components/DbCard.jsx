import React, { useState } from 'react'
import db from '../db/excel.json'
import SubData from './SubData'

const DATABASE = db.basedata.slice(2,20)

const DbCard = () => {
const [dataBase, setdataBase] = useState(DATABASE)
const [initialInput, setInitialInput] = useState("")
   
const handlerSubmit=(e)=>{
  e.preventDefault()
  console.log(initialInput)
}

const handleInput=(e)=>{
  e.preventDefault()

  const resultado = BASE.filter(search=> search.__EMPTY_4 == initialInput)
  if(resultado.length>0){
    setBaseData(resultado)
  }
  else{
    setBaseData([])
  }
  setInitialInput("")
}
  return (
    <div>
        Search!
      <form onSubmit={handlerSubmit}>
        <input type="text"  value={initialInput} onChange={(e)=>setInitialInput(e.target.value)}/>
        <button>Push</button>
      </form>
      <article>
        {
            dataBase.map((data, i)=> <SubData key={i} data={data}/>)
        }
      </article>

    </div>
  )
}

export default DbCard