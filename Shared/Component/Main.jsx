import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Viewall } from '../../Module/Notes/Component/Viewall'
import { Addnotes } from '../../Module/Notes/Component/Addnotes'
export const Main = () => {
    
  return (
    <div >
        <Routes>
            
            <Route path='/:screen' element={<Viewall/>}/>
            <Route path='/' element={<Viewall/>}/>
            <Route path='add' element={<Addnotes/>}/>
        </Routes>
    </div>
  )
}
