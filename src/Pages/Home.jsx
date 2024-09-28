import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import IntroBanner from '../Components/IntroBanner'
import sweats from '../../public/Home Images/Sweats.png'
import jeans from '../../public/Home Images/Jeans.png'
import shoes from '../../public/Home Images/Shoes.png'
import bfashion from '../../public/Home Images/Bfashion.png'

const Home = () => {
  return (
    <div>
      {/* intro banner */}
      <section id="intro" className='md:pt-[236px] md:pb-[102px] pt-28 pb-10 px-2 md:px-0 bg-[#FAE3B6] md:rounded-b-[20px] rounded-b-[8px]'>
        <Container className='md:px-[80px]'>
          <IntroBanner/>
        </Container>
      </section>
      
      {/* new collection */}
      <section id="new_collection" className='md:py-[217px] py-12 bg-white'>
        <Container className='md:pb-[188px] pb-20  md:px-[74px] px-2'>
          <h1 className='md:text-[64px] text-[38px] text-black font-Frank md:font-bold font-semibold text-center'> 
          New Collection
          </h1>
          <div className="category flex sm:flex-nowrap flex-wrap justify-between sm:gap-0 gap-y-5 md:mt-[108px] mt-10">
            <div className="child md:w-[396px] md:h-[402px] sm:w-[200px] sm:h-[214px] w-[170px] h-[182px] md:rounded-[20px] rounded-[10px] bg-slate-400 relative">
              <img src={sweats} alt="" className='w-full h-full'/>
              <button className='absolute md:bottom-[45px] bottom-5 left-1/2 -translate-x-1/2 bg-white px-10 py-[2px] md:px-[125px] md:py-[11px] md:rounded-[20px] rounded-[6px] md:text-2xl text-base text-black font-Poppins'>
              Sweater
              </button>
            </div>
            <div className="child md:w-[396px] md:h-[402px] sm:w-[200px] sm:h-[214px] w-[170px] h-[182px] md:rounded-[20px] rounded-[10px] bg-slate-400 relative">
              <img src={jeans} alt="" className='w-full h-full'/>
              <button className='absolute md:bottom-[45px] bottom-5 left-1/2 -translate-x-1/2 bg-white px-10 py-[2px] md:px-[125px] md:py-[11px] md:rounded-[20px] rounded-[6px] md:text-2xl text-base text-black font-Poppins'>
              Jeans
              </button>
            </div>
            <div className="child md:w-[396px] md:h-[402px] sm:w-[200px] sm:h-[214px] w-[170px] h-[182px] md:rounded-[20px] rounded-[10px] bg-slate-400 relative">
              <img src={shoes} alt="" className='w-full h-full'/>
              <button className='absolute md:bottom-[45px] bottom-5 left-1/2 -translate-x-1/2 bg-white px-10 py-[2px] md:px-[125px] md:py-[11px] md:rounded-[20px] rounded-[6px] md:text-2xl text-base text-black font-Poppins'>
              Baskets
              </button>
            </div>
          </div>
        </Container>
        <Container className='px-2 md:px-[55px] flex sm:flex-row flex-col justify-between '>
          <div className="image md:w-[749px] md:h-[734px] sm:w-[500px] sm:relative z-20">
            <img src={bfashion} alt="" className='h-full w-full'/>
          </div>
          <div className="text md:pr-[169px] md:mt-[119px] sm:mt-[55px] mt-4 sm:relative z-10">
            <h1 className='md:text-[64px] text-[38px] text-black font-Frank md:font-bold font-semibold md:max-w-[437px] sm:max-w-[222px]'> 
            Best Fashion Since 2010
            </h1>
            <p className='md:max-w-[443px] sm:max-w-[282px] md:text-2xl text-base text-black font-Poppins md:font-semibold font-medium md:mt-16 sm:mt-10 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. 
            </p>
            <div className="rec sm:absolute md:top-[537px] md:left-[-274px] top-[388px] left-[-177px] md:pl-[77px] sm:pl-[32px] md:pr-[42px] sm:pr-5 md:py-[69px] sm:py-5 p-5 bg-[#FEECC8] md:rounded-[20px] rounded-[8px] flex items-center md:gap-[50px] sm:gap-5 justify-between sm:justify-normal sm:mt-0 mt-5">
              <div>
                <h1 className='md:text-[64px] sm:text-[28px] text-lg text-black font-Podkova md:font-bold sm:font-semibold font-medium md:max-w-[437px] sm:max-w-[222px]'> 
                2010
                </h1>
                <p className='md:text-[28px] sm:text-base text-xs text-black font-Poppins font-medium text-center md:mt-[25px]'>
                  Founded
                </p>
              </div>
              <div className="line md:h-[143px] sm:h-[60px] h-[48px] w-[1px] bg-[#000]"></div>
              <div>
                <h1 className='md:text-[64px] sm:text-[28px] text-lg text-black font-Podkova md:font-bold sm:font-semibold font-medium md:max-w-[437px] sm:max-w-[222px]'> 
                5000+
                </h1>
                <p className='md:text-[28px] sm:text-base text-xs text-black font-Poppins font-medium text-center md:mt-[25px]'>
                Product Sold
                </p>
              </div>
              <div className="line md:h-[143px] sm:h-[60px] h-[48px] w-[1px] bg-[#000]"></div>
              <div>
                <h1 className='md:text-[64px] sm:text-[28px] text-lg text-black font-Podkova md:font-bold sm:font-semibold font-medium md:max-w-[437px] sm:max-w-[222px]'> 
                4500+
                </h1>
                <p className='md:text-[28px] sm:text-base text-xs text-black font-Poppins font-medium text-center md:mt-[25px]'>
                Best Reviews
                </p>
              </div>
            </div>
          </div>

        </Container>
      </section>
    </div>
  )
}

export default Home