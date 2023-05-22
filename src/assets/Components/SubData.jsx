import React, { useEffect, useState } from 'react'
import './Styles/Card.css'

import Modal from './Modal';
import './Styles/Subdata.css'
const SubData = ({data, priceDB ,}) => {

  const [showModal, setShowModal] = useState(false);


  const handleClick=()=>{
    setShowModal(true);

  }

  const handleClose=()=>{
    setShowModal(false);
  }
  
  const handleEdit = (e)=>{
   e.stopPropagation()
  }
  

  const handleDelete = (e)=>{
    e.stopPropagation()
  }

  
  const elementoEncontrado = priceDB.find(item => item.__EMPTY_3 === data.__EMPTY_4);

const aprob = "Parts (Mass Prod.)"
const result = aprob.toLowerCase()


  return (
   
    <div  className='card'>

     <div className= {`card_container ${data.__EMPTY_11.toLowerCase() ==  result ? "subdataFinish":"subdadaAssy"}`} onClick={handleClick}>
     <ul>
        <li>{data.__EMPTY_4}</li>
       
        <li>{data.__EMPTY_3 ? data.__EMPTY_3:"N/A"}</li>
        <li>{data.__EMPTY_7 ? data.__EMPTY_7:"N/A"}</li>

        <li>{data.__EMPTY_8 ? data.__EMPTY_8:"N/A"}</li>
        <li>{data.__EMPTY_11.toLowerCase() == result ? "Assy": "Terminado"}</li>
    <div className='card_btns'>
    <button className='card_btn' onClick={handleDelete}>Delete</button>
      <button className='card_btn' onClick={handleEdit}>Editar</button>
    </div>
    </ul>
   
    

     </div>
    
     {showModal ? <Modal datos = {data} elementoEncontrado = { elementoEncontrado } handleClose={handleClose}   />:null}
  
    </div>
  )
}

export default SubData;