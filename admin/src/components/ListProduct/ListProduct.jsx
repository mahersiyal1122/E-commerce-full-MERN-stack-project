import React , {useEffect, useState} from 'react'
import cross_icon from "../../assets/cross_icon.png"

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo=async ()=>{
    await fetch("http://localhost:4000/allproducts")
    .then((res)=>res.json())
    .then((data)=>{setAllproducts(data)});
  }
  useEffect(()=>{
    fetchInfo()
  },[])

  const remove_product=async (id)=>{
    await fetch("http://localhost:4000/removeproduct",{
      method: "POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify({id})
    })
    await fetchInfo();
  }

  return (
    <div className='flex flex-col w-full h-[79vh] overflow-y-auto py-[10px] px-[50px] m-[20px] rounded-md bg-transparent text-white box-border --- mobile:max-[865px]:px-4 --- mobile:max-sm:mx-0'>
      <h1 className='text-[32px] font-bold text-center'>All Products List</h1>
      <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] w-full gap-[10px] py-[20px] text-[white] text-[15px] font-semibold justify-items-center --- mobile:max-sm:grid-cols-[1fr_1fr_1fr_1fr]'>
        <div>Products</div>
        <div className='justify-self-start --- mobile:max-sm:hidden'>Title</div>
        <div>Old Price</div>
        <div>New Price</div>
        <div>Category</div>
        <div className='--- mobile:max-sm:hidden'>Remove</div>
      </div>
      <div>
      <hr className='border-[#626262]' />
        {allproducts.map((product,index)=>{
          return<div key={index}>
            <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] w-full gap-[10px] py-[15px] text-[15px] font-medium items-center justify-items-center --- mobile:max-sm:grid-cols-[1fr_1fr_1fr_1fr]' >
            <img className='h-[80px] w-[45px]' src={product.image} alt="" />
            <div className='justify-self-start break-all --- mobile:max-sm:hidden'>{product.name}</div>
            <div>${product.old_price}</div>
            <div>${product.new_price}</div>
            <div>{product.category}</div>
            <img onClick={()=>{remove_product(product.id)}} className='cursor-pointer m-auto --- mobile:max-sm:hidden' src={cross_icon} alt="" />
          </div>
          <div className='mb-2 hidden pl-5 --- mobile:max-sm:block'>
            <div className='text-[15px] font-semibold flex gap-1'>Title : <div className='font-medium'>{product.name}</div></div>
            <div onClick={()=>{remove_product(product.id)}} className='text-[15px] font-semibold text-[red] cursor-pointer'>Remove</div>
          </div>
          <hr className= 'border-[#626262]' />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct
