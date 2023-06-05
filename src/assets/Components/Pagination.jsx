import React from 'react'
import ReactPaginate from 'react-paginate'


const Pagination = ({totalPages,changepage})=>{

    return (
        <div>
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

export default Pagination