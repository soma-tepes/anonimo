import React from 'react'

const SubFormDont = ({handleUpdate,i,data}) => {
  return (
   <>
   <form onSubmit={(e) => handleUpdate(i, e)}>
    <input type="text" name="name" defaultValue={data.Name} />
    <input type="text" name="user" defaultValue={data.Ape} />
    <input type="text" name="location" defaultValue={data.Fam} />
    <button>Update</button>
  </form>
   </>
  )
}

export default SubFormDont