import React from 'react'
import './Styles/Modal.css'
import { useState } from 'react';

const Modal = ({ datos : bdinfo , data : pricesdb , handleClose })=>{

    const [buttonText, setButtonText] = useState("⭕");
    const handleMouseEnter = () => {
        setButtonText("❌");
      };
      
      const handleMouseLeave = () => {
        setButtonText("⭕");
      };
  
 const mult = pricesdb.__EMPTY_10 * bdinfo.__EMPTY_7
    return (<>
    
    (
      <div className="modal">
        <div className="modal_content">
          
        <h2> Description Prices </h2> 
        
      <ul>
        <li className='modalContentTerminado'><span>Model: </span> {pricesdb.__EMPTY_3}</li>
        <div className='modal_description'>
        <li><span className='modalCardBlock'>Description: </span>{pricesdb.__EMPTY_4}</li>
        </div>
        <div className='modalContentValue'>
        <div><li><span  className='modalCardBlock'>Value: </span>{pricesdb.__EMPTY_10 == 0 ? "N/Asigned" : pricesdb.__EMPTY_10.toFixed(2)} {pricesdb.__EMPTY_10 == 0 ? "" : pricesdb.__EMPTY_16.slice(0,3)}</li></div> 
        <div> <li><span  className='modalCardBlock'> Value x Box </span>{pricesdb.__EMPTY_10 ? mult.toFixed(2) :"N/Asigned"} {pricesdb.__EMPTY_10 == 0 ? "" : pricesdb.__EMPTY_16.slice(0,3)}</li></div>
        
        </div>
       
      
        <li className='modalContentTerminado'><span>Type: </span>{bdinfo.__EMPTY_11 == "Parts (Mass Prod.)" ?  "Sub-Ensamble" :"Producto Terminado"}</li>
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