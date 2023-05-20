import React, { useEffect, useState } from 'react'
import './Styles/Card.css'
import price from '../db/data.json'
import Modal from './Modal';
import './Styles/Subdata.css'
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

     <div className= {`card_container ${data.__EMPTY_11 == "Parts (Mass Prod.)"  ? "subdataFinish":"subdadaAssy"}`} onClick={handleClick}>
     <ul>
        <li>{data.__EMPTY_4}</li>
       
        <li>{data.__EMPTY_3?data.__EMPTY_3:"N/A"}</li>
        <li>{data.__EMPTY_7?data.__EMPTY_7:"N/A"}</li>

        <li>{data.__EMPTY_8?data.__EMPTY_8:"N/A"}</li>
        <li>{data.__EMPTY_11 == "Parts (Mass Prod.)" ? "Assy": "Terminado"}</li>
   <div className='card_btns'>
    <button className='card_btn' onClick={handleDelete}>Delete</button>
      <button className='card_btn' onClick={handleEdit}>Editar</button>
    </div>
    </ul>
   
    

     </div>
    
     {showModal ? <Modal datos = {data} elementoEncontrado ={ elementoEncontrado } handleClose={handleClose}/>:null}
  
    </div>
  )
}

export default SubData;