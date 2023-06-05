import React from 'react'
import db from '../../db/excel.json'
import '../Styles/Etiqueta.css'

const BASE = db.basedata

const Etiquetas = () => {
  return (
    <div className='etiqueta'>

      <article className='container_etiqueta'>
        <h2>Title: {BASE[2].__EMPTY} </h2>
        <h2>Title: {BASE[2].__EMPTY_3} </h2>
        <h2>Title: {BASE[2].__EMPTY_4} </h2>
        <h2>Title: {BASE[2].__EMPTY_7} </h2>
      </article>
         

    </div>
  )
}

export default Etiquetas