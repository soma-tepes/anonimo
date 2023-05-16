import React, { useState } from 'react'
import DATABASE from '../db/excel.json'
import SubData from '../Components/SubData'
import ReactPaginate from 'react-paginate'
import './Styles/DbCard.css'


const BD = DATABASE.basedata.slice(2)

const DbCard = () => {

  const [initialInput, setInitialInput] = useState("")
  const [filterDataBase, setFilterDataBase] = useState(BD)
  const [page, setPage] = useState(0);
  const [modalForm, setModalForm] = useState(false)
  const [addData, setAddData] = useState([])
    

  const handleSubmit =(e)=>{
  e.preventDefault()
  setPage(0);
  const filter = BD.filter(data => {
  const value = data.__EMPTY_4;
  const value2 = data.__EMPTY_7;
  const value3 = data.__EMPTY_3;
  const input = initialInput.trim().toLowerCase();
  
  return (typeof value === 'string' && value.trim().toLowerCase() === input) ||
         (typeof value === 'number' && value === parseInt(input, 10)) ||
         (typeof value2 === 'string' && value2.trim().toLowerCase() === input) ||
         (typeof value2 === 'number' && value2 === parseInt(input, 10)) ||
         (typeof value3 === 'string' && value3.trim().toLowerCase() === input) ||
         (typeof value3 === 'number' && value3 === parseInt(input, 10))
})
  
  if(initialInput){
  if(filter.length>0){
    setFilterDataBase(filter)
  }
  else{setFilterDataBase([])}
  }
  else{setFilterDataBase(BD)}
  

}

const handleForm = ()=>{
   
  setModalForm(true)

   
}
// form
const handleSubmitForm =(e)=>{
  e.preventDefault()
  const validate_input = e.target.__EMPTY_4.value
  const validate = BD.some(data=>data.__EMPTY_4 == validate_input)

if(validate){
 alert ("dato Repetido")
}
  else{
 const {__EMPTY = "ORC1" ,__EMPTY_1 = "C200",__EMPTY_2 ="JA02",__EMPTY_3,__EMPTY_4,__EMPTY_6,__EMPTY_7,__EMPTY_11} = e.target
  const data = {

    __EMPTY : __EMPTY.value ?  __EMPTY.value : __EMPTY,
    __EMPTY_1 :__EMPTY_1.value ?  __EMPTY_1.value : __EMPTY_1,
    __EMPTY_2 :__EMPTY_2.value ?  __EMPTY_2.value : __EMPTY_2,
    __EMPTY_3 :__EMPTY_3.value ?  __EMPTY_3.value : "No data",
    __EMPTY_4 :__EMPTY_4.value ?  __EMPTY_4.value : "No data",
    __EMPTY_6 :__EMPTY_6.value ?  __EMPTY_6.value : "No data",
    __EMPTY_7 :__EMPTY_7.value ?  __EMPTY_7.value : "No data",
    __EMPTY_11 :__EMPTY_11.value ?  __EMPTY_11.value : "No data"
    
  }
setAddData([...addData,data])
e.target.reset()
}
}
  //Pagination!
  const handleClose=(e)=>{
   
    setModalForm(false);
  
  }

  const elementoxpagina = 20;
  const numerodepaginasvisitadas = page * elementoxpagina;
  const totalPages = Math.ceil(filterDataBase.length / elementoxpagina);
  const mostrarpagina = filterDataBase
    .slice(numerodepaginasvisitadas,numerodepaginasvisitadas + elementoxpagina)
    .map(data => <SubData  data={data}/>);

    const changepage = ({ selected }) => {
      setPage(selected);
    };



 //

  return (
    <div>
      <div> <button onClick={handleForm} className='dbCard_btn'>ADD MODEL ✔</button></div>
     
      <div>Search per Model Or QTY</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={initialInput} onChange={(e)=>setInitialInput(e.target.value)}></input>
        <button>Push</button>
        </form>



      <h2>Show DataBase</h2>
      
      <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={totalPages}
  onPageChange={changepage}
  containerClassName={"navigationButtons"}
  previousLinkClassName={"previousButton"}
  nextLinkClassName={"nextButton"}
  disabledClassName={"navigationDisabled"}
  activeClassName={"navigationActive"}
/>
   
      <article className='container'>
       {mostrarpagina.length > 0 ? mostrarpagina : 
       <article className='logo'>
        "No Data Found!"
        {initialInput}
       </article>
       }
      </article>
      
  
  <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={totalPages}
  onPageChange={changepage}
  containerClassName={"navigationButtons"}
  previousLinkClassName={"previousButton"}
  nextLinkClassName={"nextButton"}
  disabledClassName={"navigationDisabled"}
  activeClassName={"navigationActive"}
/>
      
{ modalForm && 

<div className='modalForm'>

<form className='modal_contentForm' onSubmit={handleSubmitForm}>
 
{/* <input type="text" id='__EMPTY'/>
<input type="text" id='__EMPTY_2'/>
<input type="text" id='__EMPTY_1'/> */}

 <input type="text" name="" id="__EMPTY_4"  placeholder='Modelo'   required/>
 <input type="text" name="" id="__EMPTY_3"   placeholder='Description'  required/>
 <input type="text" name="" id="__EMPTY_7"  placeholder='QTY'  required />
   <select name="" id="__EMPTY_6">
    <option value="no_data"></option>
    <option value="mts">Mts</option>
    <option value="ea">EA</option>
   </select>

 {/*  <input type="text" name="" id="__EMPTY_6" placeholder='Mts Or EA'  required/> */}
 <select name="" id="__EMPTY_11">
  <option value="no_data"></option>
  <option value="sub">Sub Assy</option>
  <option value="finish">Finish Good</option>
 </select>
 {/*  <input type="text" name="" id="__EMPTY_11" placeholder='Sub or Terminator'  required/> */}
  <input type="file"  />
  <button>POST</button>
 <button onClick={handleClose}>❌</button>
</form>
</div>
 

}
 
    </div>
  )
}

export default DbCard