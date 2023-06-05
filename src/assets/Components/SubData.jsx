import React, { useEffect, useState } from 'react';
import './Styles/Card.css';

import Modal from './Modal';
import './Styles/Subdata.css';

const SubData = ({ data, priceDB, i, FINALBD }) => {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(false);
  const [updateB, setUpdateB] = useState(FINALBD);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleEdit = (e, index) => {
    e.stopPropagation();
    setEditData(!editData);
    setUpdateB(data);
  };

  const handleUpdate = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const updatedData = {
      __EMPTY_3: e.target.elements.__EMPTY_3.value,
      __EMPTY_4: e.target.elements.__EMPTY_4.value,
      __EMPTY_11: e.target.elements.__EMPTY_11.value,
    };
  
    const updatedArray = [...updateB];
    updatedArray[index] = updatedData;
  
    setEditData(false);
    setUpdateB(updatedArray);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
  };

  const handleCancel = () => {
    setEditData(false);
  };
  
  const elementoEncontrado = priceDB.find(item => item.__EMPTY_3 === data.__EMPTY_4);

  const aprob = "Parts (Mass Prod.)";
  const result = aprob.toLowerCase();

  return (
    <>
      <div className='card'>
        <div className={`card_container ${data.__EMPTY_11.toLowerCase() === result ? 'subdataFinish' : 'subdadaAssy'}`} onClick={handleClick}>
          {editData ? (
            <form onClick={e => {
              e.stopPropagation();
              e.preventDefault();
            }}>
              <input type='text' id='__EMPTY_3' defaultValue={data.__EMPTY_4} />
              <input type='text' id='__EMPTY_4' defaultValue={data.__EMPTY_3} />
              <input type='text' id='__EMPTY_11' defaultValue={data.__EMPTY_11} />
              <button onClick={(e) => handleUpdate(i, e)}>Update</button>
              <button onClick={handleCancel}>Cancel</button>
            </form>
          ) : (
            <ul>
              <li>{data.__EMPTY_4}</li>
              <li>{data.__EMPTY_3 ? data.__EMPTY_3 : 'N/A'}</li>
              <li>{data.__EMPTY_7 ? data.__EMPTY_7 : 'N/A'}</li>
              <li>{data.__EMPTY_8 ? data.__EMPTY_8 : 'N/A'}</li>
              <li>{data.__EMPTY_11.toLowerCase() === result ? 'Assy' : 'Terminado'}</li>
              <div className='card_btns'>
                <button className='card_btn' onClick={handleDelete}>Delete</button>
                <button className='card_btn' onClick={(e) => handleEdit(e, i)}>Edit</button>
              </div>
            </ul>
          )}
        </div>
        {showModal ? <Modal datos={data} elementoEncontrado={elementoEncontrado} handleClose={handleClose} /> : null}
      </div>
    </>
  );
};

export default SubData;
