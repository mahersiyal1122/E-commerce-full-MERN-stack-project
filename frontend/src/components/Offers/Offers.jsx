import React from 'react'
import exclusive_image from "../assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers w-[85vw] flex m-auto py-10 px-44 mb-20 --- lg:max-xl:justify-between lg:max-xl:px-16 lg:max-xl:py-8 --- sm:max-lg:w-full sm:max-lg:justify-between sm:max-lg:px-16 sm:max-lg:mb-16 sm:max-lg:py-5 --- mobile:max-sm:w-full mobile:max-sm:py-5 mobile:max-sm:px-5 mobile:max-sm:mb-6' style={{background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)"}}>
      <div className='flex flex-col flex-1 justify-center'>
        <h1 className='text-[#171717] text-7xl font-semibold --- sm:max-lg:text-4xl --- mobile:max-sm:text-3xl'>Exclusive</h1>
        <h1 className='text-[#171717] text-7xl font-semibold --- sm:max-lg:text-4xl --- mobile:max-sm:text-3xl'>Offers For You</h1>
        <p className='text-[#171717] text-2xl font-semibold --- sm:max-lg:text-xl sm:max-lg:pt-2 --- mobile:max-sm:text-[15px] mobile:max-sm:leading-[1.4]'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-64 h-[60px] bg-[#ff4141] border-none text-white rounded-[35px] mt-7 text-xl font-medium --- sm:max-lg:w-56 sm:max-lg:mt-6 --- mobile:max-sm:w-40 mobile:max-sm:h-[50px] mobile:max-sm:text-lg mobile:max-sm:mt-2'>Check Now</button>
      </div>
      <div className='flex items-center justify-end flex-1 '>
        <img className='w-[300px] --- sm:max-lg:w-[200px] --- mobile:max-sm:w-[150px]' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
