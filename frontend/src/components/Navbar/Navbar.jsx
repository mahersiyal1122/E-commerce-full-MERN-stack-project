import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  const {getTotalCartItems}=useContext(ShopContext);

  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar flex justify-around p-4 shadow-[0_1px_3px_-2px_black] --- sm:max-lg:p-2 --- sm:max-md:justify-between sm:max-lg:mx-2 ---  mobile:max-sm:p-2  mobile:max-sm:justify-between --- mobile:max-mb_max:grid mobile:max-mb_max:grid-cols-2 mobile:max-mb_max:h-auto '>
      <Link to={"/"}>
      <div className='nav-logo flex items-center gap-3 cursor-pointer'>
        <img className='--- sm:max-lg:w-14 --- mobile:max-sm:w-10' src={logo} alt="" />
        <p className='text-[#171717] text-4xl font-semibold --- sm:max-lg:text-xl --- mobile:max-sm:text-base '>SHOPPER</p>
      </div></Link>
      <ul className='nav-menu flex items-center gap-12 text-[#626262] text-xl font-medium --- sm:max-lg:text-base sm:max-lg:gap-8 sm:max-lg:font-semibold ---  mobile:max-sm:text-sm  mobile:max-sm:gap-4 --- mobile:max-mb_max:row-[2/3] mobile:max-mb_max:col-[1/3]  mobile:max-mb_max:justify-self-center mobile:max-mb_max:my-2 '>
        <li onClick={() => { setMenu("shop") }} className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <Link to="/">Shop</Link>{menu === "shop" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141] --- sm:max-lg:w-[70%] ---  mobile:max-sm:w-7  mobile:max-sm:h-[3px]' /> : ""}</li>
        <li onClick={() => { setMenu("mens") }} className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <Link to="/mens">Men</Link> {menu === "mens" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141] --- sm:max-lg:w-[70%] ---  mobile:max-sm:w-7  mobile:max-sm:h-[3px]' /> : ""}</li>
        <li onClick={() => { setMenu("womens") }} className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <Link to="/womens">Women</Link> {menu === "womens" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141] --- sm:max-lg:w-[70%] ---  mobile:max-sm:w-7  mobile:max-sm:h-[3px]' /> : ""}</li>
        <li onClick={() => { setMenu("kids") }} className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141] --- sm:max-lg:w-[70%] ---  mobile:max-sm:w-7  mobile:max-sm:h-[3px]' /> : ""}</li>
      </ul>
      <div className='nav-login-cart flex items-center gap-11 --- sm:max-lg:gap-5 ---  mobile:max-sm:gap-2 --- mobile:max-mb_max:justify-self-end'>
        {localStorage.getItem('auth-token')
        ?<button className='navbarLoginLogoutButton' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
        :<Link to="/login"><button className='navbarLoginLogoutButton'>Login</button></Link>
        }
        <Link to="/cart"><img className='--- sm:max-lg:w-8 ---  mobile:max-sm:w-7' src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count w-5 flex justify-center items-center bg-[red] text-white rounded-xl text-sm -mt-9 -ml-14 --- sm:max-lg:-ml-7 sm:max-lg:text-[11px] sm:max-lg:rounded-lg sm:max-lg:w-4 sm:max-lg:h-4 sm:max-lg:-mt-8 ---  mobile:max-sm:w-3  mobile:max-sm:h-3  mobile:max-sm:text-[10px]  mobile:max-sm:rounded-full mobile:max-sm:p-[7px]  mobile:max-sm:pb-[6px]  mobile:max-sm:px-[6.5px]  mobile:max-sm:-ml-4  mobile:max-sm:-mt-7'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
