import React, { useState } from 'react';
import './Styles/Card.css';
import Modal from './Modal';
import './Styles/Subdata.css';

const SubData = ({ data, priceDB, FINALBD, setFilterDataBase }) => {
  const [deletedData, setDeletedData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(false);
  const [editedData, setEditedData] = useState({
    __EMPTY_3: data.__EMPTY_4,
    __EMPTY_4: data.__EMPTY_3,
    __EMPTY_11: data.__EMPTY_11,
  });



  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log(data)
    setEditData(true);
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    // Validar que los valores no sean vacíos o nulos antes de guardar
    if (
      editedData.__EMPTY_3.trim() === '' ||
      editedData.__EMPTY_4.trim() === '' ||
      editedData.__EMPTY_11.trim() === ''
    ) {
      // Mostrar mensaje de error o realizar alguna acción
      return ;
    }
  
    const updatedData = {
      ...data,
      __EMPTY_4: editedData.__EMPTY_3,
      __EMPTY_3: editedData.__EMPTY_4,
      __EMPTY_11: editedData.__EMPTY_11,
    };
  
    setEditData(false);
    setFilterDataBase((prevData) =>
      prevData.map((item) => (item.id === data.id ? updatedData : item))
    );
  
    setFilterDataBase((prevData) =>
      prevData.map((item) => (item.id === data.id ? updatedData : item))
    );
  };
  
  

  const handleDelete = (e) => {
    e.stopPropagation();
  
    // Agregar el registro eliminado a deletedData
    setDeletedData((prevData) => [...prevData, data]);
  
    // Eliminar el registro correspondiente de filterDataBase
    setFilterDataBase((prevData) =>
      prevData.filter((item) => item.id !== data.id)
    );
  };
  
  

  const handleCancel = () => {
    setEditData(false);
  };

  const elementoEncontrado = priceDB.find(
    (item) => item.__EMPTY_3 === data.__EMPTY_4
  );

  const aprob = 'Parts (Mass Prod.)';
  const result = aprob.toLowerCase();
 
  return (
    <>
      <div className='card'>
        <div
          className={`card_container ${
            data.__EMPTY_11.toLowerCase() === result
              ? 'subdataFinish'
              : 'subdadaAssy'
          }`}
          onClick={handleClick}
        >
          {editData ? (
            <form onClick={(e) => e.stopPropagation()}>
              <input required type='text' id='__EMPTY_3' defaultValue={editedData.__EMPTY_3} // Cambiar value por defaultValue
              onChange={(e) => setEditedData({ ...editedData, __EMPTY_3: e.target.value })}/>

             <input required type='text' id='__EMPTY_4'defaultValue={editedData.__EMPTY_4} // Cambiar value por defaultValue
              onChange={(e) => setEditedData({ ...editedData, __EMPTY_4: e.target.value })}/>
             
             <input required type='text' id='__EMPTY_11' defaultValue={editedData.__EMPTY_11} // Cambiar value por defaultValue
              onChange={(e) => setEditedData({ ...editedData, __EMPTY_11: e.target.value })}
/>
              <button onClick={handleUpdate}>Update</button>
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
                <button className='card_btn' onClick={handleDelete}>
                  Delete
                </button>
                <button className='card_btn' onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </ul>
          )}
        </div>
        {showModal ? (
          <Modal datos={data} elementoEncontrado={elementoEncontrado} handleClose={handleClose} />
        ) : null}
      </div>
    </>
  );
};

export default SubData;
