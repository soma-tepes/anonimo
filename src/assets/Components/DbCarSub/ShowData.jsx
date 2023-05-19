import React from 'react'
import PageNotFount from '../PageNotFount'
import '../Styles/ShowData.css'

const ShowData = ({mostrarpagina,initialInput}) => {
  return (
    <article className='containerShowData' >

       {
            mostrarpagina.length > 0 ? mostrarpagina : <PageNotFount initialInput={initialInput}/>
       }
      </article>
  )
}

export default ShowData