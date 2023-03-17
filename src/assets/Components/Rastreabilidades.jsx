import React, { useState } from 'react'

const Rastreabilidades = () => {

const [initialInput, setInitialInput] = useState("")
const [datas, setDatas] = useState("")
const [register, setRegister] = useState({})


const handleSubmit = (e)=>{
  e.preventDefault("")
  let b = initialInput.split(" ").filter(element => element!= "")
  let c = {... b} 
   setDatas(c)
   setInitialInput("")
}

let ac = datas[0]?.slice(4,22)





  return (
    <div>Rastreabilidades

      

    <form onSubmit={handleSubmit}>
        <input type="text"   value={initialInput} onChange={e=>setInitialInput(e.target.value)} />
        <button>PUSH</button>
    </form>


      <h2>Te muestro los datos Escaneados </h2>
      <p>{ac}</p>
      <p>{datas[1] }</p>
      <p>{datas[2]}</p>
      <p>{datas[3]}</p>
      <p>{datas[4]}</p>
      <p>{datas[5]}</p>
      <p>{datas[6]}</p>
   <p>
    {
      
    }
   </p>
    </div>
  )
}

export default Rastreabilidades