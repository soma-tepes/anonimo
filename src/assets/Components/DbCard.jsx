import React, {  useState } from 'react'
import DATABASE from '../db/excel.json'
import SubData from '../Components/SubData'
import './Styles/DbCard.css'
import Pagination from './Pagination'
import FormAddComponent from './FormAddComponent'
import ShowData from './DbCarSub/ShowData'
import TableModel from './DbCarSub/TableModel'
import Price from "../db/data.json"
import NotiModal from './DbCarSub/NotiModal'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'
import ModalCon from './ModalCon'



const BD = DATABASE.basedata.slice(2)

const DbCard = () => {

  const [initialInput, setInitialInput] = useState("")
  const [filterDataBase, setFilterDataBase] = useState(BD)
  const [page, setPage] = useState(0);
  const [modalForm, setModalForm] = useState(false)
  const [modalConfirmation, setModalConfirmation] = useState(false)
  const [addData, setAddData] = useState([])
  const [priceDB, setPriceDB] = useState(Price) 
  const [notiModal, setNotiModal] = useState(!true)
  const FINALBD = [...BD,...addData]
   FINALBD.forEach(data=>{data.id = uuidv4()})
  
const handleSubmit =(e)=>{

  e.preventDefault()
  setPage(0);
 
  const x = FINALBD.filter(data => {
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
  if(x.length>0){
    setFilterDataBase(x)
    
}
  else{setFilterDataBase([])}
  }
  else{setFilterDataBase(FINALBD)}
  

}

const handleForm = ()=>{
   setModalForm(true)
}
// converter a JSON//
const downloadLink = useRef(null);
const handleDownload = () => {
  const jsonData = JSON.stringify(FINALBD);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  downloadLink.current.href = url;
  downloadLink.current.download = 'data.json';
  downloadLink.current.click();
};

//end converter a JSON
// form
const handleSubmitForm = (e) => {
  e.preventDefault();
  const validate_input = e.target.__EMPTY_4.value.toUpperCase();
  const validate = FINALBD.some(data => data.__EMPTY_4 == validate_input);
 /*  const validate2 = priceDB.some(data=> data.__EMPTY_3 == validate_input) */
  
  if (validate) {
    alert("data repeat");
  }
 
  else {
    const properties = ["__EMPTY", "__EMPTY_1", "__EMPTY_2", "__EMPTY_3", "__EMPTY_4", "__EMPTY_6", "__EMPTY_7", "__EMPTY_11"];
    const defaultValues = {
      __EMPTY: "ORC1",
      __EMPTY_1: "C200",
      __EMPTY_2: "JA02",
     
      
    };



    const data = {}
    properties.forEach(property => {
      data[property] = e.target[property] && e.target[property].value ? e.target[property].value.toUpperCase() : defaultValues[property] || "No data";
    });
     const newData = {
      
      __EMPTY_4: "", // Asegúrate de reemplazar "name" con el nombre de la propiedad que contiene el nombre en el objeto "data"
      __EMPTY_3: e.target.__EMPTY_4.value.toUpperCase() ,// Reemplaza "newProperty" con el nombre de la nueva propiedad y "valor" con su valor
      __EMPTY_7: 0,
      __EMPTY_10: 0,
      __EMPTY_11: 0,
      __EMPTY_16: "",

    };
    setAddData([...addData, data]);
    setFilterDataBase([...filterDataBase,data])
    setPriceDB([...priceDB, newData]);
    e.target.reset();
    setModalForm(false)
    setNotiModal(true)
    setTimeout(() => {
      setNotiModal(!true)
    }, 3000);
  }
}

  const handleClose=()=>{
   setModalForm(false);
  }

//funtion edit



//
 
//Pagination

  const elementoxpagina = 20;
  const numerodepaginasvisitadas = page * elementoxpagina;
  const totalPages = Math.ceil(filterDataBase.length / elementoxpagina);
  const mostrarpagina = filterDataBase
    .slice(numerodepaginasvisitadas,numerodepaginasvisitadas + elementoxpagina)
    .map((data,i) => 
    
    
    <SubData key={i} data={data} priceDB={priceDB} i={i} FINALBD={FINALBD} setFilterDataBase={setFilterDataBase} />
    
    );

    const changepage = ({ selected }) => {
      setPage(selected);
    };



 // Ref



 //

  return (
    <div>
      {notiModal &&  <NotiModal/>} 
      <div> <button onClick={handleForm} className='dbCard_btn'>ADD MODEL ✔</button></div>
      <h2>Show DataBase</h2>
      
     

      <form onSubmit={handleSubmit}>
        <input className='pretty-input' placeholder=' Model Or QTY' type="text" value={initialInput} onChange={(e)=>setInitialInput(e.target.value)}></input>
        <button>Push</button>
        </form>
<Pagination totalPages={totalPages} changepage={changepage}/>
   
<TableModel/>


<ShowData mostrarpagina={mostrarpagina} initialInput={initialInput} />
 
 <Pagination totalPages={totalPages} changepage={changepage}/>
 
 {/* Agregar Elemento Formulario Principal  */}
 
 

 <FormAddComponent  modalForm={modalForm} handleSubmitForm={handleSubmitForm} handleClose={handleClose}/>
 
 {modalConfirmation &&(
 <ModalCon handleDownload={handleDownload}downloadLink={downloadLink}/>
 )
 

 }
 
 
 
 </div>
  )
}

export default DbCard