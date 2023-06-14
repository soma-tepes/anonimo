import React from 'react'
import './Styles/Modal.css'
import { useState } from 'react';


const Modal = ({ datos : bdinfo , elementoEncontrado , handleClose })=>{

    const [buttonText, setButtonText] = useState("⭕");
    const handleMouseEnter = () => {
        setButtonText("❌");
      };
      
      const handleMouseLeave = () => {
        setButtonText("⭕");
      };

 const mult =  elementoEncontrado.__EMPTY_10 * bdinfo.__EMPTY_7 
  const tar = "Parts (Mass Prod.)"
  const res = tar.toLowerCase()

  
  return (<>
    
    ({
    

<div className="modal">
<div className={`modal_content ${bdinfo.__EMPTY_11.toLowerCase()  == res ? "borderModalA":"borderModalF"}`}>
  
<h2> Description Prices </h2> 

<ul>
 
<li className='modalContentTerminado'><span>Model: </span> {elementoEncontrado.__EMPTY_3}</li>
<div className='modal_description'>
  <div><img src="" alt="" /></div>
<li><span className='modalCardBlock'>Description: </span>{elementoEncontrado.__EMPTY_4}</li>
</div>
<div className='modalContentValue'>
<div><li><span  className='modalCardBlock'>Value: </span>{elementoEncontrado.__EMPTY_10 == 0 ? "N/Asigned" : elementoEncontrado.__EMPTY_10.toFixed(2)} {elementoEncontrado.__EMPTY_10 == 0 ? "" : elementoEncontrado.__EMPTY_16.slice(0,3)}</li></div> 
<div> <li><span  className='modalCardBlock'> Value x Box </span>{elementoEncontrado.__EMPTY_10 ? mult.toFixed(2) :"N/Asigned"} {elementoEncontrado.__EMPTY_10 == 0 ? "" : elementoEncontrado.__EMPTY_16.slice(0,3)}</li></div>

</div>


<li className='modalContentTerminado'><span>Type: </span>{bdinfo.__EMPTY_11.toLowerCase()  == res ?  "Sub-Ensamble" :"Producto Terminado"}</li>
</ul>
  <button className='modal_btn ' onClick={handleClose}  
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>  {buttonText}</button>
</div>
</div>

    } 
     
    ) 
    
    </>)

}


export default Modal