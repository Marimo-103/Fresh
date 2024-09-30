import React from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import image from '/Common Images/SignUp.png'
import logo from '/Common Images/Logo.png'

const SignUp = () => {
    return (
        <section className='bg-[#FAE3B6]  sm:px-10 px-2 py-[106px]'>
            <Container className='max-w-[1440px] flex sm:flex-row flex-col'>
                <div className="userActivity md:pt-10 sm:pt-6 pt-4 md:pb-[85px] sm:pb-9 pb-7 md:pl-[87px] sm:px-8 px-4 md:pr-[102px] bg-white md:rounded-tl-[20px] sm:rounded-tl-xl md:rounded-bl-[20px] sm:rounded-bl-xl rounded-[9px] sm:rounded-tr-none sm:rounded-br-none">
                    <h1 className="md:text-[64px] text-[38px] text-black font-Frank md:font-bold font-semibold text-center">
                        Get Started
                    </h1>
                    <p className='text-center md:my-6 my-1'>
                        <span className='md:text-2xl sm:text-lg text-base text-[#868686] font-Frank font-medium'>Already have an account?</span> <Link className='md:text-2xl sm:text-lg text-base text-[#F59C15] font-Frank font-medium' to='/log/in'>Log in</Link>
                    </p>
                    <div className="or flex md:gap-8 gap-4 items-center justify-center sm:mt-4 md:m-0 mt-5">
                        <div className="line h-[2px] md:w-[230px] sm:w-[140px] w-[120px] bg-[#c4c4c4] rounded-full"></div>
                        <p className='md:text-2xl sm:text-lg text-base text-[#000] font-Frank font-medium'>OR</p>
                        <div className="line h-[2px] md:w-[230px] sm:w-[140px] w-[120px] bg-[#c4c4c4] rounded-full"></div>
                    </div>
                    <div className="fb_gg flex sm:gap-6 gap-4 items-center justify-center md:mt-9 md:mb-[57px] sm:mb-9 mb-7 sm:mt-5 mt-3">
                        <button className='md:py-4 md:px-6 py-2 px-2 bg-[#F4F4F4] md:rounded-[20px] sm:rounded-xl rounded-[9px] shadow-custom flex items-center md:gap-3 sm:gap-1 gap-1'>
                            <FcGoogle className='md:text-3xl text-base' />
                            <span className='md:text-[22px] sm:text-xs text-xs text-[#000] font-Frank font-medium'>
                                Sign up with Google
                            </span>
                        </button>
                        <button className='md:py-4 md:px-6 py-2 px-2 bg-[#4946E5] md:rounded-[20px] sm:rounded-xl rounded-[9px] shadow-custom flex items-center md:gap-3 sm:gap-2 gap-1'>
                            <FaFacebook className='md  md:text-3xl text-base text-white' />
                            <span className='md:text-[22px] sm:text-xs text-xs text-[#fff] font-Frank font-medium'>
                                Sign up with Facebook
                            </span>
                        </button>
                    </div>
                    <div className="form flex flex-col md:gap-9 sm:gap-6 gap-5">
                        <div className="flex flex-col md:gap-5 gap-2">
                            <label htmlFor="" className='md:text-2xl sm:text-lg text-base text-[#868686] font-Frank font-medium'>
                                Full name
                            </label>
                            <input type="text" placeholder='Enter Your Full Name' className='w-full border border-[#C5C5C5] md:rounded-[20px] sm:rounded-xl rounded-[9px] md:px-4 md:py-[10px] px-2 py-1 outline-none md:text-xl' />
                        </div>
                        <div className="flex flex-col md:gap-5 gap-2">
                            <label htmlFor="" className='md:text-2xl sm:text-lg text-base text-[#868686] font-Frank font-medium'>
                                Email Adress
                            </label>
                            <input type="text" placeholder='Enter Your Email Adress' className='w-full border border-[#C5C5C5]  md:rounded-[20px] sm:rounded-xl rounded-[9px] md:px-4 md:py-[10px] px-2 py-1 outline-none md:text-xl' />
                        </div>
                        <div className="flex flex-col md:gap-5 gap-2">
                            <label htmlFor="" className='md:text-2xl sm:text-lg text-base text-[#868686] font-Frank font-medium'>
                                Password
                            </label>
                            <input type="text" placeholder='Enter Your Password' className='w-full border border-[#C5C5C5]  md:rounded-[20px] sm:rounded-xl rounded-[9px] md:px-4 md:py-[10px] px-2 py-1 outline-none md:text-xl' />
                        </div>
                    </div>
                    <div className="terms flex items-center md:gap-4 gap-2 mt-6 justify-center">
                        <input type="checkbox" id="terms" name="terms" />
                        <p className='md:text-2xl text-xs text-[#868686] font-Frank font-medium'>
                        I agree to all the <span className='text-[#F59C15]'>Terms</span>, and <span className='text-[#F59C15]'>Privacy Policy</span> and <span className='text-[#F59C15]'>Fees</span>
                        </p>
                    </div>
                    <div className='flex justify-center'>
                    <button className='md:px-[155px] md:py-4 sm:px-14 py-1 px-11 bg-[#FAE3B6] md:rounded-[20px] sm:rounded-xl rounded-[9px] md:text-2xl text-lg text-black font-Frank font-medium shadow-custom hover:shadow-none duration-300 md:mt-[75px] mt-6
                    '>
                    Create Account
                    </button>
                    </div>
                </div>
                <div className="image md:w-[618px] md:h-[1060px] sm:block hidden relative">
                    <img src={image} alt="" className='w-full h-full object-cover md:rounded-tr-[20px] sm:rounded-tr-xl rounded-tr-[9px] md:rounded-br-[20px] sm:rounded-br-xl rounded-br-[9px]' />
                    <img src={logo} alt="" className='absolute top-[29px] right-[30px] sm:w-12 sm:top-4 sm:right-3'/>
                </div>
            </Container>
        </section>
    )
}

export default SignUp