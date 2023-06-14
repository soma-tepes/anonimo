import React from 'react'

const SubFormPass = ({handleEdit, data,i}) => {
  return (
 <>
  <ul key={i}>
    <li>{data.Name}</li>
    <li>{data.Ape}</li>
    <li>{data.Fam}</li>
    <button onClick={() => handleEdit(i)}>Edit</button>
  </ul>
 </>
  )
}

export default SubFormPass