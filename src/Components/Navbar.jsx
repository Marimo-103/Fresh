import React, { useEffect, useState } from 'react'
import Container from "../Components/Container";
import { Link } from 'react-router-dom';
import { PiDotsNine, PiDotsNineBold, PiDotsNineFill, PiDotsNineThin } from 'react-icons/pi';

const Navbar = () => {

  let [show, setShow] = useState(false)

  useEffect(()=>{
    function size() {
      if (window.innerWidth < 768) {
        setShow(false)
      }else{
        setShow(true)
      }
    }
    size()
    window.addEventListener('resize', size)
  },[])

  return (
    <nav className='md:px-[60px] md:pt-[47px] px-2 pt-1 absolute top-0 left-1/2 -translate-x-1/2 w-full'>
      <Container className='flex justify-between items-center'>
        <div className="logo md:text-5xl text-2xl text-[#000] font-Poppins md:font-semibold font-medium">
          Fresh
        </div>
        <div className="menu">
          <ul className={`flex md:flex-row flex-col md:gap-[59px] gap-2 md:static absolute right-[10px] top-[14px] bg-[#CFA485] md:bg-transparent py-2 px-4 md:p-0 duration-500 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <li>
              <Link className='md:text-2xl text-sm md:text-[#000] text-white font-Poppins md:font-semibold font-medium'>
              Men
              </Link>
            </li>
            <li>
              <Link className='md:text-2xl text-sm md:text-[#000] text-white font-Poppins md:font-semibold font-medium'>
              Woman
              </Link>
            </li>
            <li>
              <Link className='md:text-2xl text-sm md:text-[#000] text-white font-Poppins md:font-semibold font-medium'>
              Kids
              </Link>
            </li>
            <li>
              <Link className='md:text-2xl text-sm md:text-[#000] text-white font-Poppins md:font-semibold font-medium'>
              Collection
              </Link>
            </li>
            <li>
              <Link className='md:text-2xl text-sm md:text-[#000] text-white font-Poppins md:font-semibold font-medium'>
              Trends
              </Link>
            </li>
          </ul>
        </div>
        <div className="btns flex gap-[10px]">
          <button className='md:py-[11px] md:px-[28px] py-[2px] px-[13px] bg-[#FDBB57] border border-[#FFD687] md:rounded-[10px] rounded-[5px] duration-300 hover:text-[#000] hover:bg-transparent md:text-2xl text-[10px] text-[#050505] font-Poppins md:font-semibold'>
          Login
          </button>
          <button className='md:py-[11px] md:px-[15px] py-[2px] px-[6px] bg-[#FDBB57] border border-[#FFD687] md:rounded-[10px] rounded-[5px] duration-300 hover:text-[#000] hover:bg-transparent md:text-2xl text-[10px] text-[#050505] font-Poppins md:font-semibold'>
          Sign up
          </button>
        </div>
        <div onClick={()=> setShow(!show)} className="menu_btn block md:hidden relative right-2 cursor-pointer z-50">
        <PiDotsNine className={`text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${ show ? "opacity-100" : "opacity-0 rotate-90"}`} />
        <PiDotsNineBold className={`text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${ show ? "opacity-0" : "opacity-100 rotate-90"}`} />
        </div>

      </Container>
    </nav>
  )
}

export default Navbar