import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/ListProduct/ListProduct'

const Admin = () => {
  return (<>
    <div class="absolute inset-0 -z-10 min-h-[105vh] w-full items-center px-0 pt-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] --- mobile:max-sm:min-h-[800px]">
    </div>
    <div className='flex gap-5 --- mobile:max-sm:flex-col mobile:max-sm:gap-0'>
      <Sidebar />
      <div className='w-[3px] h-[75vh] my-auto bg-[#7b7b7b] rounded-md --- mobile:max-sm:hidden'></div>
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  </>
  )
}

export default Admin
