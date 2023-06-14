import React, { useState } from 'react'
import SubFormDont from './SubFormDont'
import SubFormPass from './SubFormPass'

const Example1 = () => {
  const [bdform, setBdform] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, user, location } = e.target
    const data = {
      Name: name.value,
      Ape: user.value,
      Fam: location.value
    };

    setBdform([...bdform, data])
    e.target.reset()
  }

  const handleEdit = (index) => {
   
  const data = [...bdform];
  data[index].isEditing = true;
      setBdform(data)
    
    
  }

  const handleUpdate = (index, e) => {
    e.preventDefault();
    const { name, user, location } = e.target;
    const data = [...bdform];
    data[index].Name = name.value;
    data[index].Ape = user.value;
    data[index].Fam = location.value;
    data[index].isEditing = false;
    setBdform(data);
  }

  return (
    <div>
    Form CRUD

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="user" />
      <input type="text" name="location" />
      <button>POST</button>
    </form>
    <article>
    {
bdform && bdform.map((data, i ) =>
data.isEditing ? (
  <SubFormDont handleUpdate={handleUpdate} data={data} i={i}/>
) : (
  <SubFormPass data={data} i={i} handleEdit={handleEdit}/>
)
)
}
    </article>
  </div>
  )
}

export default Example1