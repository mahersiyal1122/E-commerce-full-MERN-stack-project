import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from "../../assets/Product_Cart.svg"
import list_product_icon from "../../assets/Product_list_icon.svg"
const Sidebar = () => {
    return (
        <div className='flex flex-col pt-[30px] gap-5 w-full max-w-[250px] h-[83vh] bg-transparent --- mobile:max-sm:flex-row mobile:max-sm:h-full mobile:max-sm:max-w-full mobile:max-sm:pt-auto mobile:max-sm:py-[20px] mobile:max-sm:justify-center mobile:max-sm:items-center mobile:max-sm:gap-3' >
            <Link to={"/addproduct"}>
                <div className='flex justify-center items-center my-0 mx-5 py-[5px] px-[10px] rounded-[6px] font-medium bg-[#ff4141 border text-white gap-5 cursor-pointer --- mobile:max-sm:text-sm mobile:max-sm:gap-2 mobile:max-sm:mx-[10px]'>
                    <img className='--- mobile:max-sm:w-5' src={add_product_icon} alt="" />
                    <div>Add Product</div>
                </div>
            </Link>
            <Link to={"/listproduct"}>
                <div className='flex justify-center items-center my-0 mx-5 py-[5px] px-[10px] rounded-[6px] font-medium bg-[#ff4141 border text-white gap-5 cursor-pointer --- mobile:max-sm:text-sm mobile:max-sm:gap-2 mobile:max-sm:mx-[10px]'>
                    <img className='--- mobile:max-sm:w-5' src={list_product_icon} alt="" />
                    <div>Product List</div>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
