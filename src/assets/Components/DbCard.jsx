import React, { useState } from 'react'
import DATABASE from '../db/excel.json'
import SubData from '../Components/SubData'
import ReactPaginate from 'react-paginate'


const BD = DATABASE.basedata.slice(2)

const DbCard = () => {

  const [initialInput, setInitialInput] = useState("")
  const [filterDataBase, setFilterDataBase] = useState(BD)
  const [page, setPage] = useState(0);

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

  //Pagination!


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
      <div>Search per Model Or QTY</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={initialInput} onChange={(e)=>setInitialInput(e.target.value)}></input>
        <button>Push</button>
        </form>



      <h2>Show DataBase</h2>
     
   
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
      
    </div>
  )
}

export default DbCard