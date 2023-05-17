import React from 'react'
import './Styles/Modal.css'
import { useState } from 'react';

const Modal = ({ datos , data , handleClose })=>{

    const [buttonText, setButtonText] = useState("⭕");
    const handleMouseEnter = () => {
        setButtonText("❌");
      };
      
      const handleMouseLeave = () => {
        setButtonText("⭕");
      };
  

    return (<>
    
    (
      <div className="modal">
        <div className="modal_content">
          
        <h2> <p>Detail Model </p></h2> 
        
      <ul>
        <li><h2><span>Model: </span></h2><h3 className='modalContentTerminado'>{data.__EMPTY_3}</h3></li>
        <li><h2><span className='card_block'>Description: </span></h2>{data.__EMPTY_4}</li>
        <li><h2><span>Price * Piece: </span></h2><h3>{data.__EMPTY_10 == 0 ? "JEMT" : data.__EMPTY_10} {data.__EMPTY_16 == 0 ? "JEMT" : data.__EMPTY_16}</h3></li>

        {/* <li><span>Moneda: </span>{data.__EMPTY_16 == 0 ? "JEMT" : data.__EMPTY_16}</li> */}
        <li className='modalContentTerminado'><span>M. Mode: </span>{datos.__EMPTY_11 == "Parts (Mass Prod.)" ? "Sub-Ensamble": "Producto Terminado"}</li>
    </ul>
          <button className='modal_btn ' onClick={handleClose}  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>  {buttonText}</button>
        </div>
      </div>
    ) 
    
    </>)

}


export default Modal