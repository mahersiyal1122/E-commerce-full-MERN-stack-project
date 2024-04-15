import React, { useState, useEffect } from 'react'
// import popular_in_women from "../assets/popular"
import Item from '../Item/Item'

const Popular = () => {

  const [popular_in_women, setPopular_in_women] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopular_in_women(data));
  }, [])


  return (
    <div className='flex flex-col items-center gap-3 mb-20 --- mobile:max-sm:mb-10'>
      <h1 className='text-[#171717] text-5xl font-semibold --- sm:max-lg:text-4xl --- mobile:max-sm:text-2xl'>POPULAR IN WOMEN</h1>
      <hr className='w-52 h-2 bg-[#252525] rounded-xl --- sm:max-lg:h-[6px] --- mobile:max-sm:h-[4px] mobile:max-sm:w-[150px]' />
      <div className='flex mt-12 gap-8 --- sm:max-lg:grid sm:max-lg:grid-cols-2 --- mobile:max-sm:grid mobile:max-sm:grid-cols-2 mobile:max-sm:gap-6 mobile:max-sm:w-[90vw]'>
        {popular_in_women.map((item, index) => {
          return <Item key={index} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default Popular
