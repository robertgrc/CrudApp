import React, { useState } from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';



const CrudApi = () => {

const [db, setDb] = useState([])

const [dataToEdit, setDataToEdit] = useState(null);

const createData = (data) =>{
    data.id = Date.now();
    // console.log(data)
    setDb([...db, data])
};
const updateData = (data) =>{
  let newData = db.map((el)=>(el.id===data.id? data:el));
  setDb(newData);
};
const deleteData = (id) =>{
  let isDelete = window.confirm(`Estas seguro de eliminar el registro?`)

  if(isDelete){
    let newData = db.filter(el=>el.id !==id);
    setDb(newData)
  }

};

  return (
      <>
        <h1>CrudApp</h1>
        <CrudForm 
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        />
      </>
  )
}

export default CrudApi;