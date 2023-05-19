import React, { useState } from 'react'
import DATABASE from '../db/excel.json'
import SubData from '../Components/SubData'
import './Styles/DbCard.css'
import Pagination from './Pagination'
import FormAddComponent from './FormAddComponent'
import ShowData from './DbCarSub/ShowData'
import TableModel from './DbCarSub/TableModel'




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
const handleSubmitForm = (e) => {
  e.preventDefault();
  const validate_input = e.target.__EMPTY_4.value.toUpperCase();
  const validate = BD.some(data => data.__EMPTY_4 == validate_input);

  if (validate) {
    alert("data repeat");
  } else {
    
    const properties = ["__EMPTY", "__EMPTY_1", "__EMPTY_2", "__EMPTY_3", "__EMPTY_4", "__EMPTY_6", "__EMPTY_7", "__EMPTY_11"];
    const defaultValues = {
      __EMPTY: "ORC1",
      __EMPTY_1: "C200",
      __EMPTY_2: "JA02"
    };

    const data = {}
    properties.forEach(property => {
      data[property] = e.target[property] && e.target[property].value ? e.target[property].value.toUpperCase() : defaultValues[property] || "No data";
    });

    setAddData([...addData, data]);
    e.target.reset();
  }
}
  //Pagination!
  const handleClose=()=>{
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
      <h2>Show DataBase</h2>
      
     

      <form onSubmit={handleSubmit}>
        <input className='pretty-input' placeholder=' Model Or QTY' type="text" value={initialInput} onChange={(e)=>setInitialInput(e.target.value)}></input>
        <button>Push</button>
        </form>



   
    
  <Pagination totalPages={totalPages} changepage={changepage}/>
   
 
 <TableModel/>

  <ShowData mostrarpagina={mostrarpagina} initialInput={initialInput}/>
 


  <Pagination totalPages={totalPages} changepage={changepage}/>
  <FormAddComponent modalForm={modalForm} handleSubmitForm={handleSubmitForm} handleClose={handleClose}/>
 
 </div>
  )
}

export default DbCard