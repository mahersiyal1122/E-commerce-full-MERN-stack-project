import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[85vw] flex flex-col justify-center items-center m-auto py-14 px-44 mb-20 gap-8 --- sm:max-lg:w-full sm:max-lg:gap-6 --- mobile:max-sm:w-full mobile:max-sm:gap-2 mobile:max-sm:mb-6 --- mobile:max-mb_medium:p-10' style={{background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)"}} >
      <h1 className='text-[#454545] text-5xl font-semibold text-center --- sm:max-lg:text-3xl sm:max-lg:w-[600px] --- mobile:max-sm:text-3xl mobile:max-sm:w-[350px] --- mobile:max-mb_medium:text-2xl mobile:max-mb_medium:w-[270px]'>Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545] text-xl --- sm:max-lg:text-center --- mobile:max-sm:text-base mobile:max-sm:w-[300px] mobile:max-sm:text-center --- mobile:max-mb_medium:text-sm mobile:max-mb_medium:w-[250px]'>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between w-[730px] h-[70px] bg-white border-2 border-[#e3e3e3] rounded-[80px] --- sm:max-lg:w-[500px] sm:max-lg:h-[60px] --- mobile:max-sm:w-[300px] mobile:max-sm:h-[50px] --- mobile:max-mb_medium:w-[250px] mobile:max-mb_medium:h-[40px]'>
        <input className='w-[450px] ml-7 border-none outline-none text-[#616161] text-base font-["Poppins"] --- sm:max-lg:w-[400px] --- mobile:max-sm:w-[180px] --- mobile:max-mb_medium:w-[140px] mobile:max-mb_medium:text-[12px]' type="email" placeholder='Your Email Id' />
        <button className='w-52 h-[70px] text-white bg-black rounded-[80px] text-base cursor-pointer --- sm:max-lg:h-[60px] sm:max-lg:w-48 --- mobile:max-sm:h-[50px] mobile:max-sm:w mobile:max-sm:text-xs --- mobile:max-mb_medium:h-[40px] mobile:max-mb_medium:text-[11px]'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
