import React from 'react'
import './Styles/Card.css'

const SubData = ({data}) => {


  
  return (
    
    <div className='card'>
     <div class="card_container">
     <li>
        <ul><span>Model: </span>{data.__EMPTY_4}</ul>
        <ul><span className='card_block'>Description: </span>{data.__EMPTY_3}</ul>
        <ul><span>QTY Per BOX: </span>{data.__EMPTY_7}</ul>

        <ul><span>QTY Per Bolsa: </span>{data.__EMPTY_8}</ul>
    </li>
    <div className='card_btns'>
    <button className='card_btn'>Delete</button>
      <button className='card_btn'>Edit</button>
    </div>
    

     </div>
    
    </div>
  )
}

export default SubData