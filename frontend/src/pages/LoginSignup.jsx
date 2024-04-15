import React, {useState} from 'react'

const LoginSignup = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login=async ()=>{
    // console.log("Login Fntn Executed", formData)
    let responseData;
    await fetch("http://localhost:4000/login",{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)
    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup=async ()=>{
    // console.log("Signup Fntn Executed", formData)
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)
    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='w-full bg-[#fce3fe] py-[60px] mb-10 --- mobile:max-sm:'>
      <div className='w-[580px] bg-white m-auto py-[30px] px-[60px] --- mobile:max-sm:w-[80vw] mobile:max-sm:px-[30px] mobile:max-sm:py-[30px] '>
        <h1 className='my-5 mx-0 text-2xl font-bold --- mobile:max-sm:text-xl mobile:max-sm:my-0'>{state}</h1>
        <div className='flex flex-col gap-6 mt-7 --- mobile:max-sm:gap-4 mobile:max-sm:mt-4'>
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} className='inputStyle' type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} className='inputStyle' type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} className='inputStyle' type="password" placeholder='Password'  />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} className='w-full h-14 text-white bg-[#ff4141] border-none text-xl font-medium cursor-pointer mt-6 --- mobile:max-sm:mt-5 mobile:max-sm:h-9 mobile:max-sm:text-sm'>Continue</button>
        {state==="Sign Up"
        ?<p className='loginStyle'>Already have an account?<span onClick={()=>{setState("Login")}} className='text-[#ff4141] font-semibold cursor-pointer'> Login here</span></p>
        :<p className='loginStyle'>Don't have an account?<span onClick={()=>{setState("Sign Up")}} className='text-[#ff4141] font-semibold cursor-pointer'> Sign Up</span></p>}

        <div className='flex items-center gap-3 text-[#5c5c5c] text-sm font-medium my-6 --- mobile:max-sm:text-xs mobile:max-sm:my-0 mobile:max-sm:mt-3'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
