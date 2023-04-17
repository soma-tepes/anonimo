import React, { useState } from 'react'
import './Styles/Card.css'

const SubData = ({data}) => {

  const [showModal, setShowModal] = useState(false);

  const handleClick=()=>{
    setShowModal(true);
  }

  const handleClose=()=>{
    setShowModal(false);
  }
  
  return (
    
    <div  className='card'>
     <div className="card_container" onClick={handleClick}>
     <li>
        <ul><span>Model: </span>{data.__EMPTY_4}</ul>
        <ul><span className='card_block'>Description: </span>{data.__EMPTY_3}</ul>
        <ul><span>QTY Per BOX: </span>{data.__EMPTY_7}</ul>

        <ul><span>QTY Per Package: </span>{data.__EMPTY_8}</ul>
        <ul><span>M. Mode: </span>{data.__EMPTY_11 == "Parts (Mass Prod.)" ? "Sub-Ensamble": "Producto Terminado"}</ul>
    </li>
    <div className='card_btns'>
    <button className='card_btn' onClick={handleClose}>Cerrar</button>
      <button className='card_btn' onClick={handleClick}>Editar</button>
    </div>
    

     </div>
    
     {showModal ? (
      <div className="modal">
        <div className="modal_content">
          
          <p>Aquí va el contenido del modal.</p>
          <li>
        <ul><span>Model: </span>{data.__EMPTY_4}</ul>
        <ul><span className='card_block'>Description: </span>{data.__EMPTY_3}</ul>
        <ul><span>QTY Per BOX: </span>{data.__EMPTY_7}</ul>

        <ul><span>QTY Per Package: </span>{data.__EMPTY_8}</ul>
        <ul><span>M. Mode: </span>{data.__EMPTY_11 == "Parts (Mass Prod.)" ? "Sub-Ensamble": "Producto Terminado"}</ul>
    </li>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    ) : null}
    
    </div>
  )
}

export default SubData;