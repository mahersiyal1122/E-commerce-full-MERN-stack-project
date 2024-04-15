import React from 'react'
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pinterest_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 --- mobile:max-sm:gap-8'>
      <Link onClick={()=>window.scrollTo(0,0)} to={"/"}>
      <div className='flex items-center gap-5 cursor-pointer --- mobile:max-sm:gap-3'>
        <img className='--- mobile:max-sm:w-16' src={footer_logo} alt="" />
        <p className='text-[#383838] text-5xl font-bold --- mobile:max-sm:text-3xl --- mobile:max-mb_max:text-2xl'>SHOPPER</p>
      </div></Link>
      <ul className='flex gap-12 text-[#252525] text-xl --- mobile:max-sm:gap-5 mobile:max-sm:text-lg mobile:max-sm:justify-center mobile:max-sm:flex-wrap mobile:max-sm:mx-4'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className='flex gap-5 --- mobile:max-sm:gap-4'>
        <div className='p-2 pb-1 rounded-lg bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer --- mobile:max-sm:p-1'>
            <img className='--- mobile:max-sm:w-6' src={instagram_icon} alt="" />
        </div>
        <div className='p-2 pb-1 rounded-lg bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer --- mobile:max-sm:p-1'>
            <img className='--- mobile:max-sm:w-6' src={pinterest_icon} alt="" />
        </div>
        <div className='p-2 pb-1 rounded-lg bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer --- mobile:max-sm:p-1'>
            <img className='--- mobile:max-sm:w-6' src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className='flex flex-col items-center gap-8 w-full mb-8 text-[#1a1a1a] text-xl --- mobile:max-sm:text-xs mobile:max-sm:gap-6'>
        <hr className='w-4/5 border-none rounded-[10px] bg-[#c7c7c7] h-[3px]' />
        <p className='text-center'>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
