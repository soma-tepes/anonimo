import React from 'react'

const DatosRastre = ({data}) => {
const handleClick =()=>{
  alert(`Selecccion: ${data}`)

}

  return (
    <article className= {` r_box ${data[0].charAt(0) ==='C' ? "r_yello": ""}`} onClick={handleClick}>

    <ul>
      <li><span>Model:   </span>{data[0] }</li>
      <li><span>QTY:     </span>{data[1]}</li>
      <li><span>Order:   </span>{data[2]}</li>
      <li><span>Lote:    </span>{data[3]}</li>
    </ul>
    <div className='r_btn'>
    <button onClick={e=>e.stopPropagation()}>Edit</button>
    <button onClick={e=>e.stopPropagation()}>Delete</button>
    </div>
    
   </article>
  
  )
}

export default DatosRastre