import React from 'react'
import bc_arrow_icon from "../assets/breadcrum_arrow.png"


const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='flex items-center gap-2 text-[#5e5e5e] text-base font-semibold capitalize mx-[120px] my-8 --- lg:max-xl:mx-[60px] --- sm:max-lg:mx-[40px] sm:max-lg:mr-0 --- mobile:max-sm:mx-[20px] mobile:max-sm:mt-3 mobile:max-sm:items-start mobile:max-sm:text-sm mobile:max-sm:'>
      HOME <img className='--- mobile:max-sm:w-[7px] mobile:max-sm:pt-[3.5px]' src={bc_arrow_icon} alt="" /> SHOP <img className='--- mobile:max-sm:w-[7px] mobile:max-sm:pt-[3.5px]' src={bc_arrow_icon} alt="" /> {product.category} <img className='--- mobile:max-sm:w-[7px] mobile:max-sm:pt-[3.5px]' src={bc_arrow_icon} alt="" /> <span className='--- mobile:max-sm:w-full mobile:max-sm:truncate'>{product.name}</span>
    </div>
  )
}

export default Breadcrum
