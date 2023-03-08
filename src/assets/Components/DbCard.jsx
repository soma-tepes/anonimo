import React, { useState } from 'react'
import db from '../db/excel.json'
import SubData from './SubData'

const DATABASE  = db.basedata.slice(2,20)

const DbCard = () => {
   
   const [initialInput, setInitialInput] = useState("")
   const [datas, setDatas] = useState(DATABASE)
   const [currentPage, setCurrentPage] = useState(1)
   const [dataPerPage] = useState(10)

   const handleSubmit =(e)=>{
    e.preventDefault()

    if(initialInput){
    const filtro = DATABASE.filter(data => data.__EMPTY_4 == initialInput)
    
   if(filtro.length>0){
    setDatas(filtro)
   }
   else{setDatas([]) }
   setInitialInput('')
    }
    else{setDatas(DATABASE)}
   setCurrentPage(1)
   }

  // Calculate indexes for pagination
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = datas.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers to display
  const pageNumbers = [];
  const totalData = datas.length;
  const totalPages = Math.ceil(totalData / dataPerPage);
  const maxPageNumbers = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
  if (endPage - startPage < maxPageNumbers - 1) {
    startPage = Math.max(1, endPage - maxPageNumbers + 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search Model'
        value={initialInput} onChange={(e)=> setInitialInput(e.target.value)}/>

        <button>Search!</button>
      </form>

      {currentData.length >= 1? (currentData.map((data,i)=> <SubData  key={i} data={data}/>)): "Not Data Search!"}

      {/* Pagination buttons */}
      <div>
        <button onClick={() => paginate(1)}>First</button>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)} className={currentPage === number ? "active" : ""}>
            {number}
          </button>
        ))}
        <button onClick={() => paginate(totalPages)}>Last</button>
      </div>
    </div>
  )
}

export default DbCard
