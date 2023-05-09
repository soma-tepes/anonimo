import React, { useState } from 'react'
import Price from '../db/data.json'
import SubPrice from './SubPrice'


const Prices = ()=>{
const [contenedor, setContenedor] = useState()




    return (
        <div className='container_price_principal'>
          
            {Price && Price.map((data,i)=><SubPrice key={i} data={data}/>)}
        </div>
    )
}

export default Prices