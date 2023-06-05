import React from 'react'

const FormAddComponent = ({modalForm,handleSubmitForm,handleClose}) => {

 


  return (
    <div>
        { modalForm && 

<div  className='modalForm'>

<form className='modal_contentForm' onSubmit={handleSubmitForm}>
 
<input type="text" className='repeat_data' name="" id="__EMPTY_4"  placeholder='Modelo'   />
 <input type="text" name="" id="__EMPTY_3"   placeholder='Description'  required/>
 <input type="number"  min="0" name="" id="__EMPTY_7"  placeholder='QTY'  required />
  
  <div className='modal_select'>
  <select  name="" id="__EMPTY_6">
    <option value="no_data"></option>
    <option value="mts">Mts</option>
    <option value="ea">EA</option>
   </select>


 <select name="" id="__EMPTY_11">
  <option value="no_data"></option>
  <option value="Parts (Mass Prod.)">Sub Assy</option>
  <option value="finish">Finish Good</option>
 </select>
  </div>
   

  <input type="file"  />
  <button>POST</button>
 <button onClick={handleClose}>❌</button>
</form>
</div>
 }
    </div>
  )
}

export default FormAddComponent