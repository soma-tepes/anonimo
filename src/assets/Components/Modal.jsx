import React from 'react'


const Modal = ({ data , handleClose })=>{


    return (<>
    
    (
      <div className="modal">
        <div className="modal_content">
          
          <p>Description an Detail </p>
          <li>
        <ul><span>Model: </span>{data.__EMPTY_3}</ul>
        <ul><span className='card_block'>Description: </span>{data.__EMPTY_4}</ul>
        <ul><span>Price x Piece: </span>{data.__EMPTY_10 == 0 ? "JEMT" : data.__EMPTY_10}</ul>

        <ul><span>Moneda: </span>{data.__EMPTY_16 == 0 ? "JEMT" : data.__EMPTY_16}</ul>
        <ul><span>M. Mode: </span>{data.__EMPTY_11 == "Parts (Mass Prod.)" ? "Sub-Ensamble": "Producto Terminado"}</ul>
    </li>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    ) 
    
    </>)

}


export default Modal