import React from 'react'
import Container from "../Components/Container";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='md:px-[60px] md:pt-[47px] px-2 pt-1 absolute left-1/2 -translate-x-1/2 w-full'>
      <Container className='flex justify-between items-center'>
        <div className="logo md:text-5xl text-2xl text-[#000] font-Poppins md:font-semibold font-medium">
          Fresh
        </div>
        <div className="menu">
          <ul className='md:flex hidden gap-[59px]'>
            <li>
              <Link className='text-2xl text-[#000] font-Poppins font-semibold'>
              Men
              </Link>
            </li>
            <li>
              <Link className='text-2xl text-[#000] font-Poppins font-semibold'>
              Woman
              </Link>
            </li>
            <li>
              <Link className='text-2xl text-[#000] font-Poppins font-semibold'>
              Kids
              </Link>
            </li>
            <li>
              <Link className='text-2xl text-[#000] font-Poppins font-semibold'>
              Collection
              </Link>
            </li>
            <li>
              <Link className='text-2xl text-[#000] font-Poppins font-semibold'>
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

      </Container>
    </nav>
  )
}

export default Navbar