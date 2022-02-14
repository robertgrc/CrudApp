import React, { useState } from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
    },
  ];

const CrudApp = () => {

const [db, setDb] = useState(initialDb)

const [dataToEdit, setDataToEdit] = useState(null);

const createData = (data) =>{
    data.id = Date.now();
    // console.log(data)
    setDb([...db, data])
};
const updateData = (data) =>{};
const deleteData = (id) =>{};

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
export  default CrudApp;