import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from "../assets/cart_cross_icon.png"
const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount , addToCart } = useContext(ShopContext)

    return (
        <div className='my-[50px] mx-[120px] --- lg:max-xl:mx-[60px] --- sm:max-lg:mx-[40px] --- mobile:max-sm:mx-[20px] mobile:max-sm:my-[40px]'>
            <div className='mobileCart'></div>
            <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 px-0 text-[#454545] text-lg font-semibold --- lg:max-xl:gap-[60px] lg:max-xl:grid-cols-[0.3fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr] --- sm:max-lg:text-base sm:max-lg:grid-cols-[1fr_6fr_0.2fr_0.2fr_0.2fr_0.2fr] sm:max-lg:gap-[25px] --- mobile:max-sm:grid-cols-[1fr_1fr_1fr_1fr] mobile:max-sm:gap-2 mobile:max-sm:text-[16px] --- mobile:max-mb_max:grid-cols-[1.5fr_1fr_1fr]'>
                <p className='--- mobile:max-sm:pl-4'>Product</p>
                <p className='--- mobile:max-sm:hidden'>Title</p>
                <p className='--- mobile:max-sm:justify-self-center --- mobile:max-mb_max:hidden'>Price</p>
                <p className='--- mobile:max-sm:justify-self-center'>Quantity</p>
                <p className='--- mobile:max-sm:justify-self-end mobile:max-sm:pr-4'>Total</p>
                <p className='--- mobile:max-sm:hidden'>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-0 ' />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 px-0 text-[#454545] text-[17px] font-medium --- lg:max-xl:grid-cols-[0.3fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr] --- sm:max-lg:text-base sm:max-lg:grid-cols-[1fr_6fr_0.2fr_0.2fr_0.2fr_0.2fr] sm:max-lg:gap-[35px] --- mobile:max-sm:grid-cols-[1fr_1fr_1fr_1fr] mobile:max-sm:gap-2 mobile:max-sm:text-[16px] --- mobile:max-mb_max:grid-cols-[1.5fr_1fr_1fr]'>
                            <div className='flex flex-col gap-1 --- mobile:max-sm:pl-0 '>
                                <img className='h-[65px] min-w-[55px] --- mobile:max-sm:h-[90px] mobile:max-sm:w-[90px] mobile:max-sm:rounded-[9px] ' src={e.image} alt="" />
                                <div className='hidden --- mobile:max-mb_max:flex mobile:max-mb_max:gap-1'>
                                    <p className='text-[#454545] font-medium text-base'>Price:</p>
                                    <p className='font-semibold text-green'>${e.new_price}</p>
                                </div>
                                <p onClick={() => { removeFromCart(e.id)}} className='hidden text-base cursor-pointer text-[red] font-medium --- mobile:max-sm:flex items-baseline mobile:max-mb_max:-mt-2'>Remove</p>
                            </div>
                            <p className='sm:max-lg:pl-[-80px] --- mobile:max-sm:hidden'>{e.name}</p>
                            <p className='lg:max-xl:pl-5 --- mobile:max-mb_max:hidden --- mobile:max-sm:justify-self-center'>${e.new_price}</p>
                            <button className='mobile:max-sm:flex justify-center items-center cursor-pointer mobile:max-sm:justify-self-center --- mobile:max-mb_max:-mt-7'>
                                <div onClick={()=>{ addToCart(e.id)}} className='hidden mobile:max-sm:flex items-center justify-center border-none mobile:max-sm:w-[30px] mobile:max-sm:h-[25px] text-white bg-[#ff5a5a]'>+</div>
                                <div className='w-[64px] h-[50px] flex items-center justify-center border-2 border-[#ebebeb] bg-[#fff] --- mobile:max-sm:w-[50px] mobile:max-sm:h-[40px] mobile:max-sm:border'>{cartItems[e.id]}</div>
                                <div onClick={() => { removeFromCart(e.id) }} className='hidden mobile:max-sm:flex items-center justify-center border-none mobile:max-sm:w-[30px] mobile:max-sm:h-[25px] text-white bg-[#ff5a5a]'>-</div>
                            </button>
                            <p className='lg:max-xl:pl-2 --- mobile:max-sm:justify-self-end mobile:max-sm:pr-5 --- mobile:max-mb_max:-mt-7'>${e.new_price * cartItems[e.id]}</p>
                            <img className='cursor-pointer w-4 my-0 mx-[30px] --- mobile:max-sm:hidden ' onClick={() => { removeFromCart(e.id) }} src={remove_icon} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
        
            <div className='flex my-[60px] mx-0 --- sm:max-lg:flex-col sm:max-lg:gap-14 --- mobile:max-sm:flex-col mobile:max-sm:gap-6 '>
                <div className='flex flex-col flex-1 mr-[200px] gap-5 --- sm:max-lg:mr-0 --- mobile:max-sm:mr-0 mobile:max-sm:gap-1'>
                    <h1 className='font-bold text-[32px] --- mobile:max-sm:text-2xl'>Cart Totals</h1>
                    <div>
                        <div className='flex justify-between py-[15px] px-0 --- sm:max-lg:text-xl '>
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[15px] px-0 --- sm:max-lg:text-xl'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[15px] px-0 --- '>
                            <h3 className='font-bold text-lg --- sm:max-lg:text-2xl'>Total</h3>
                            <h3 className='font-bold text-lg'>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='w-[260px] h-[58px] outline-none border-none text-[#fff] bg-[#ff5a5a] text-base font-semibold cursor-pointer --- sm:max-lg:w-[240px] sm:max-lg:h-[50px] sm:max-lg:text-sm --- mobile:max-sm:w-[205px] mobile:max-sm:h-[40px] mobile:max-sm:text-[13px]'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='flex-1 font-base font-medium'>
                    <p className='text-[#555]'>If you have promo code, Enter it here</p>
                    <div className='w-[400px] mt-[15px] pl-5 h-[50px] bg-[#eaeaea] flex items-center justify-between --- mobile:max-sm:w-[280px] --- mobile:max-sm:h-[40px]'>
                        <input className='border-none outline-none bg-transparent text-base w-[300px] h-[40px] pr-5 --- mobile:max-sm:w-[180px] mobile:max-sm:h-[30px] mobile:max-sm:text-sm' type="text" placeholder='Promo Code' />
                        <button className='w-[130px] h-[50px] text-base bg-black text-white cursor-pointer --- mobile:max-sm:w-[80px] mobile:max-sm:h-[40px] mobile:max-sm:text-sm'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems

