import React from 'react'
import { useState } from 'react'

const CalculHours = () => {

    const [enter, setEnter]                = useState("07:00")
    const [exit, setExit]                  = useState("15:00")
    const [value, setValue]                = useState()
    const [minutes, setminutes]            = useState()
    const [operator, setOperator]          = useState(1)
    const [valueFinal, setvalueFinal]      = useState("")
    const [sleep, setSleep]                = useState(0)
   
    /* const [option, setOption] = useState("NOT SHOW LINEA PRODUCCION")
  
    const [dataFInal, setDataFInal] = useState({})
    */
    const handleSubmit = (event) => {
      event.preventDefault();
     const startHour = new Date(`2023-03-01T${enter}:00`);
      const endHour = new Date(`2023-03-01T${exit}:00`);
      const range = endHour.getTime() - startHour.getTime();
      const minutes = Math.floor(range / 1000 / 60) - sleep;
      const hrs = Math.floor(minutes / 60);
      const totalhrs = minutes % 60
      const formattedTime = `${hrs}h ${totalhrs}m`;
      setValue(`${formattedTime}`)
      setminutes(minutes - sleep)
      const matricial = minutes / 60 
      const calculoFinal = operator * matricial 
      setvalueFinal(calculoFinal )
       //Data Object
  
  
     /*  setDataFInal({
        enter: enter,
        exit: exit,
        operator: operator,
        totalMinutes: minutes,
        formattedTime: formattedTime,
        valueFinal: valueFinal,
        option: option
      }) */
  
   
      
    }
    
  return (
    <div>
        <div className='First'>
        <h1 className='form_title_first'>Captura Hrs BY N12</h1>

        <form className='form' onSubmit={handleSubmit}>
          <label className='form_title' htmlFor="">Hour Initial</label>
          <input className='form_input' type="time" value={enter} onChange={(e) => setEnter(e.target.value)} /><br /><hr />
          <label className='form_title' htmlFor="">Hour Final</label>
          <input className='form_input' type="time" value={exit} onChange={(e) => setExit(e.target.value)} />
          <br />
         
         
          <label className='form_title' htmlFor="">Qty. Operator</label>
          <input className='form_placeholder' type="number" min="0" max="100" placeholder='#Operadores' required value={operator} onChange={(e) => setOperator(e.target.value)} /><br /><hr />

          <label className='' htmlFor="">Break Mns || Or Time Kill</label>
          <input className='form_input' value={sleep} min="0"  placeholder="Time Kill" onChange={(e) => setSleep(e.target.value)} type="number" />
          <br />

          <button type='submit' >Calculate Times!</button>
           <div className='form_datas'> 

          <div>Show Time in  Hours! : <span>{value}</span>  </div>
          <div>Show Time in Minutes! : <span>{minutes > 1 ? minutes : "Corrige"}</span> </div>
          <div>Translate Report! Capture : <span>{minutes / 60}</span> </div>
          <div>Captura Data is : <span>{valueFinal  > 1 ? valueFinal : "Corrige"}</span> </div>

           </div>
          
        </form>


      </div>
    </div>
  )
}

export default CalculHours