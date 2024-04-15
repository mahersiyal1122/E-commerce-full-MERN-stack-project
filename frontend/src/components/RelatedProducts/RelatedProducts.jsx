import React from 'react'
import data_product from '../assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-3 mb-16 --- mobile:max-sm:mb-8'>
      <h1 className='text-[#171717] text-5xl font-semibold --- sm:max-lg:text-3xl --- mobile:max-sm:text-2xl'>Related Products</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] --- sm:max-lg:h-1 --- mobile:max-sm:h-1 mobile:max-sm:w-[150px]' />
      <div className='flex gap-7 mt-12 --- sm:max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:justify-items-center --- mobile:max-sm:mx-[20px] mobile:max-sm:grid mobile:max-sm:grid-cols-2 mobile:max-sm:gap-6 mobile:max-sm:w-[90vw] mobile:max-sm:mt-8 '>
        {data_product.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
