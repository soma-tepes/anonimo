import React, { useEffect, useState } from 'react'
import db from '../db/excel.json'
import './Styles/Rastreabilidad.css'

const Rastreabilidades = () => {

const [initialInput, setInitialInput] = useState("")
const [base, setBase] = useState("")
const [escaneados, setEscaneados] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  let b = initialInput.split(' ').filter((element) => element !== '');
  let c = { ...b };
  setBase(funtion2(c));
  setInitialInput('');
 
};

//
useEffect(()=>{
  setEscaneados([...escaneados, base]);
  
},[base])
//

//
let funtion2 = (value)=>{
  let regex = /(\d+)/g;
     
   let filtrado  = db.basedata.filter(data=>data.__EMPTY_3 == value[0].slice(12))
       let [L_0 , L_1 ,L_2,L_3,L_4,L_5,L_6,L_7] = [
    
  
       
      filtrado.length > 0 ?(filtrado.map(data=> data.__EMPTY_4) ) 
      : value[0].slice(0,4) === 'O001'? value[0].slice(12): value[0].slice(4,22) 
      
      ,
      // [1] [2] puede alojar la QTY de Material
      value[1].match(regex) != null ? value[1].match(regex) : " ",
      value[2].match(regex) != null ? value[2].match(regex) : " ",
      // [3][4] puede alojar la orden 
      value[3].match(regex) ? value[3].slice(0,10).match(regex) : " ",
      value[4].match(regex) ? value[4].slice(0,10).match(regex).slice(0,10) : " ",

      value[5],
      value[6]]
      
      let vision = [L_0 , L_1 ,L_2,L_3,L_4,L_5,L_6,L_7].flat()

      for(let i=0; i<vision.length;i++){
        if(vision[i] == " " || vision[i] == undefined || vision[i] == null){
        delete vision[i]
        }
      }
     

  
  
      return vision.flat()
     
}
//



  return (
    <div>Rastreabilidades
      <form onSubmit={handleSubmit}>
        <input type="text"   value={initialInput} onChange={e=>setInitialInput(e.target.value)} />
        <button>PUSH</button>
    </form>
     <h2>Te muestro los datos Escaneados </h2>
     {
     <article>
      <ul>
        <li>{base[0]}</li>
        <li>{base[1]}</li>
        <li>{base[2]}</li>
        <li>{base[3]}</li>
      </ul>
     </article>
     }
   <p>
    {  escaneados.length >0 && 

    escaneados.map(data=> 
      
         <article className='r_box'>
          <ul>
            <li><span>Model: </span>{data[0] ? data[0]: ""}</li>
            <li><span>QTY:</span>{data[1]}</li>
            <li><span>Order: </span>{data[2]}</li>
            <li><span>Lote: </span>{data[3]}</li>
          </ul>
         
         </article>
      )
    }
   </p>
    </div>
  )
}

export default Rastreabilidades