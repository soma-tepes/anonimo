import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import db from '../db/excel.json'
import DatosRastre from './DatosRastre'
import './Styles/Rastreabilidad.css'

const Rastreabilidades = () => {

  const [initialInput, setInitialInput] = useState("")
  const [base, setBase] = useState([])
  const [escaneados, setEscaneados] = useState([]);
  const [search, setSearch] = useState("")
  const [copy, setCopy] = useState([])
  const [page, setPage] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();

    let b = initialInput.toLocaleUpperCase().split(' ').filter((element) => element !== '');
    let c = { ...b };
    setBase(funtion2(c));
    setInitialInput('');

  };



  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    if (search) {
      let result = escaneados.filter(data => data[0].toUpperCase() === search.toUpperCase());
      if (result.length > 0) {
        setCopy(result);
      } else {
        setCopy([]);
      }
    } else {
      let result = escaneados;
      setCopy(result);
    }

    setSearch("");
  };


  //Pagination

  const numberPerPage = 3;
  const pagesVisited = numberPerPage * (page - 1);
  const totalPage = Math.ceil(copy.length / numberPerPage);
  const showPages = copy.slice(pagesVisited, pagesVisited + numberPerPage)
                        .map((data,id )=> <DatosRastre key={id} data={data} />);
  
  const changepage = ({ selected }) => {
    setPage(selected + 1);                       
  };
                  

  //

  //
  let funtion2 = (value) => {
    let regex = /(\d+)/g;

    let filtrado = db.basedata.filter(data => data.__EMPTY_3 == value[0].slice(12))
    let [L_0, L_1, L_2, L_3, L_4, L_5, L_6, L_7] = [



      filtrado.length > 0 ? filtrado.map((data) => data.__EMPTY_4)
        : value[0].slice(0, 4) === 'O001' ? value[0].slice(12) : value[0].slice(4, 22)

      ,
      // [1] [2] puede alojar la QTY de Material
      value[1].match(regex) != null ? value[1].match(regex) : " ",
      value[2].match(regex) != null ? value[2].match(regex) : " ",
      // [3][4] puede alojar la orden 
      value[3].match(regex) ? value[3].slice(0, 10).match(regex) : " ",

      value[0].slice(0, 4) === 'O001' ? value[4].slice(0, 10) :
        value[4].match(regex) ? value[4].slice(0, 10).match(regex).slice(0, 10) : " ",

      value[5],
      value[6]]

    let vision = [L_0, L_1, L_2, L_3, L_4, L_5, L_6, L_7].flat()

    for (let i = 0; i < vision.length; i++) {
      if (vision[i] == " " || vision[i] == undefined || vision[i] == null) {
        delete vision[i]
      }
    }
    return vision.flat()
  }
  //






  useEffect(() => {
    if (base.length > 0) {
      setEscaneados([...escaneados, base]);
      setCopy([...escaneados, base]);
    }
  }, [base])




  return (
    <div>Rastreabilidades
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='!Scan!' value={initialInput} onChange={e => setInitialInput(e.target.value)} />


        <button>PUSH</button>
      </form>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search!' value={search} onChange={e => setSearch(e.target.value)} />
      </form>

      <h2>Datas Scan By N12</h2>
     
      <p>
        {
               showPages.length >0 ? showPages : 
              ' No data!'
        }
      </p>
    {copy.length > 0 &&
  <ReactPaginate
    previousLabel={"Previous"}
    nextLabel={"Next"}
    pageCount={totalPage}
    onPageChange={changepage}
    containerClassName={"navigationButtons"}
    previousLinkClassName={"previousButton"}
    nextLinkClassName={"nextButton"}
    disabledClassName={"navigationDisabled"}
    activeClassName={"navigationActive"}
  />
}
    </div>
  )
}

export default Rastreabilidades