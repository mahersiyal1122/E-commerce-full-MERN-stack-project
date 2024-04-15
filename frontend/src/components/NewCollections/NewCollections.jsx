import React, {useState,useEffect} from 'react'
// import new_collection from "../assets/new_collections"
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collection, setNew_collection] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/newcollections")
    .then((res)=>res.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='flex flex-col items-center gap-3 mb-20 --- mobile:max-sm:mb-5'>
      <h1 className='text-[#171717] text-5xl font-semibold --- sm:max-lg:text-4xl --- mobile:max-sm:text-2xl'>NEW COLLECTIONS</h1>
      <hr className='w-52 h-2 bg-[#252525] rounded-xl --- sm:max-lg:h-[6px] --- mobile:max-sm:w-[150px] mobile:max-sm:h-[4px]'  />
      <div className='grid grid-cols-4 my-12 gap-8 --- sm:max-lg:grid-cols-2 sm:max-lg:gap-14 --- mobile:max-sm:grid mobile:max-sm:grid-cols-2 mobile:max-sm:gap-6 mobile:max-sm:w-[90vw]'>
        {new_collection.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
