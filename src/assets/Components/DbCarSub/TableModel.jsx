import React from 'react'
import a from '../../db/excel.json'
import "../Styles/table_DbCarSub.css"

const TableModel =({})=>{

    return (
        <>
        <p>hola</p>
         {
      a && 
    <  ul class="table_DbCarSub">
     
        <li>Model</li>
        <li>Description</li>
        
        <li>QTY Per Package</li>
        <li>QTY Per Box</li>
        <li>M. Mode</li>
       <li>OPTION</li>
    </ul>
    }
        </>
    )

}

export default TableModel