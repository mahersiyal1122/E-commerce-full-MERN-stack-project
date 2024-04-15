import React from 'react'
import navLogo from "../../assets/logo.png"
import navProfile from "../../assets/nav-profile.svg"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-[15px] px-[60px] shadow-[0px_1px_3px_-2px_white] mb-[1px] bg-black ---  mobile:max-sm:px-[30px] mobile:max-sm:py-[8px]'>
      <div className='flex gap-3'>
        <img className=' --- mobile:max-sm:w-12 mobile:max-sm:h-12 ' src={navLogo} alt="" />
        <div className='flex flex-col justify-end'>
          <div className='text-white text-3xl font-semibold --- mobile:max-sm:text-xl'>SHOPPER</div>
          <div className='text-[red] text-base -mt-[6px] --- mobile:max-sm:text-xs mobile:max-sm:-mt-[4px]'>Admin</div>
        </div>
      </div>
      <img className='w-[75px] --- mobile:max-sm:w-[50px]' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar
