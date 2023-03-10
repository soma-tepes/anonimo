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
  const filter = BD.filter(data=>data.__EMPTY_4 == initialInput)
  if(initialInput){
    if(setFilterDataBase.length>0){
    setFilterDataBase(filter)
  }
  else{setFilterDataBase([])}
  }
  else{setFilterDataBase(BD)}
  setInitialInput('')

}

  //Pagination!


  const employeesPerPage = 3;
  const numberOfEmployeesVistited = page * employeesPerPage;
  const totalPages = Math.ceil(filterDataBase.length / employeesPerPage);
  const displayEmployees = filterDataBase
    .slice(numberOfEmployeesVistited,numberOfEmployeesVistited + employeesPerPage)
    .map((employee) => {
      return (
        <div className="card">
          <h4>Model: {employee.__EMPTY_4}</h4>
          <h4>Description: {employee.__EMPTY_3}</h4>
          <h4>QTY: {employee.__EMPTY_7}</h4>
        </div>
      );
    });

    const changePage = ({ selected }) => {
      setPage(selected);
    };

 //

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={initialInput} onChange={(e)=>setInitialInput(e.target.value)}></input>
        <button></button>
        </form>



      <h2>Show DataBse</h2>
     
    {/*   { filterDataBase.length >0 ?(
        filterDataBase.map((data,i)=> <SubData key={i} data={data}/>)):"No Datas Search!"
      } */}
      
      {displayEmployees.length > 0 ? displayEmployees : "No Data Found!"}
  
  <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={totalPages}
  onPageChange={changePage}
  containerClassName={"navigationButtons"}
  previousLinkClassName={"previousButton"}
  nextLinkClassName={"nextButton"}
  disabledClassName={"navigationDisabled"}
  activeClassName={"navigationActive"}
/>;
      
    </div>
  )
}

export default DbCard