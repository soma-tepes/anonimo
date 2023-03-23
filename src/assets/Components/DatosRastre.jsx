import React from 'react'

const DatosRastre = ({data}) => {
  return (
    <article className='r_box'>

    <ul>
      <li><span>Model:   </span>{data[0] }</li>
      <li><span>QTY:     </span>{data[1]}</li>
      <li><span>Order:   </span>{data[2]}</li>
      <li><span>Lote:    </span>{data[3]}</li>
    </ul>
   
   </article>
  )
}

export default DatosRastre