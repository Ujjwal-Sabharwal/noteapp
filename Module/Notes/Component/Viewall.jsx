import React from 'react'
import { useParams } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'firstName', headerName: 'File name', width: 400 },
  {
    field: 'age',
    headerName: 'Date of Creation',
    width: 200,
  },
  {field: 'color', headerName: 'COLOR' , width: 400}
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];
const today=new Date()

const rows = [
  { id: 1,  firstName: 'Jon', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null'  },
  { id: 2,  firstName: 'Cersei', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
  { id: 3,  firstName: 'Jaime', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null'  },
  { id: 4,  firstName: 'Arya', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
  { id: 5,  firstName: 'Daenerys', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
  { id: 6,  firstName: 'Special', age:  `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null' },
  { id: 7,  firstName: 'Ferrara', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null'  },
  { id: 8,  firstName: 'Rossini', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null'  },
  { id: 9,  firstName: 'Harvey', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null'  },
  { id: 10,  firstName: 'Riya', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
  { id: 11,  firstName: 'Aditi', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null' },
  { id: 12,  firstName: 'Ujjwal', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
  { id: 13,  firstName: 'Anshika', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`, color:'Null'  },
  { id: 14,  firstName: 'Daiwik', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
  { id: 15,  firstName: 'Abhishek', age: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` , color:'Null' },
];

export const Viewall = () => {
  const param = useParams();
  console.log(param);
  return (
      <div style={{  width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 13]}
        />
        <div>{param?.screen}</div>
      </div>
  )
}
