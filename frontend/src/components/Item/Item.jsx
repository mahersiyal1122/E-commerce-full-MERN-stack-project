import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-72 hover:outline outline-[#8c8c8c] outline-2 outline-offset-8 rounded-md hover:scale-105 hover:transition-[transform_0.6s] --- lg:max-xl:w-56 --- mobile:max-sm:w-full'>
      <Link to={`/product/${props.id}`}><img className='rounded-lg' onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p className='my-[6px] mx-0 --- mobile:max-sm:text-sm'>{props.name}</p>
      <div className='flex gap-5 --- '>
        <div className='text-[#374151] text-lg font-semibold '>${props.new_price}</div>
        <div className='text-[#8c8c8c] text-lg font-medium line-through '>${props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
