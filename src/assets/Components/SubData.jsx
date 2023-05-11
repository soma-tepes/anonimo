import React, { useState } from 'react'
import './Styles/Card.css'
import price from '../db/data.json'
import Modal from './Modal';
const SubData = ({data}) => {

  const [showModal, setShowModal] = useState(false);
const [db, setDb] = useState(price)

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

  
  const elementoEncontrado = db.find(item => item.__EMPTY_3 === data.__EMPTY_4);

  return (
    
    <div  className='card'>
     <div className="card_container" onClick={handleClick}>
     <li>
        <ul><span>Model: </span>{data.__EMPTY_4}</ul>
        <ul><h4></h4><span>Drawing: </span>{data.__EMPTY_4}</ul>
        <ul><span className='card_block'>Description: </span>{data.__EMPTY_3}</ul>
        <ul><span>QTY Per BOX: </span>{data.__EMPTY_7}</ul>

        <ul><span>QTY Per Package: </span>{data.__EMPTY_8}</ul>
        <ul><span>M. Mode: </span>{data.__EMPTY_11 == "Parts (Mass Prod.)" ? "Sub-Ensamble": "Producto Terminado"}</ul>
    </li>
    <div className='card_btns'>
    <button className='card_btn' onClick={handleDelete}>Delete</button>
      <button className='card_btn' onClick={handleEdit}>Editar</button>
    </div>
    

     </div>
    
     {showModal ? <Modal datos = {data} data ={ elementoEncontrado } handleClose={handleClose}/>:null}
    
    </div>
  )
}

export default SubData;