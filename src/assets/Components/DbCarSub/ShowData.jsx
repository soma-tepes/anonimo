import React from 'react'
import PageNotFount from '../PageNotFount'

const ShowData = ({mostrarpagina,initialInput}) => {
  return (
    <article className='container' >

       {
            mostrarpagina.length > 0 ? mostrarpagina : <PageNotFount initialInput={initialInput}/>
       }
      </article>
  )
}

export default ShowData