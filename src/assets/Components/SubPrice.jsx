import React from 'react'
import '../Components/Styles/Subprice.css'

const SubPrice = ({data}) => {  
  return (
    <div className='container_price'>
        <div><span>Model:</span>{data.__EMPTY_3}</div>
        <div><span>Description:</span>{data.__EMPTY_4}</div>
        <div><span>Price Per PZS:</span>{data.__EMPTY_15}</div>
        <div><span>Moned: </span>{data.__EMPTY_16}</div>
    </div>
  )
}

export default SubPrice