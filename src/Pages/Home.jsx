import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import IntroBanner from '../Components/IntroBanner'
import sweats from '/Home Images/Sweats.png'
import jeans from '/Home Images/Jeans.png'
import shoes from '/Home Images/Shoes.png'
import bfashion from '/Home Images/Bfashion.png'
import dots from '/Home Images/dots.png'
import BS_1 from '/Home Images/best_seller-1.png'
import BS_2 from '/Home Images/best_seller-2.png'
import { VscStarFull } from 'react-icons/vsc'

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
      <section id="new_collection" className='md:pt-[217px] md:pb-[299px] sm:pb-[155px] pt-12 bg-white'>
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
        <Container className='px-2 md:px-[55px] flex sm:flex-row flex-col justify-between relative'>
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
            <div className="rec sm:absolute md:top-[537px] md:left-[-274px] top-[388px] left-[-177px] md:pl-[77px] sm:pl-[32px] md:pr-[42px] sm:pr-5 md:py-[69px] sm:py-5 p-5 bg-[#FEECC8] md:rounded-[20px] rounded-[8px] flex items-center md:gap-[50px] sm:gap-5 justify-between sm:justify-normal sm:mt-0 my-5">
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
            <div className="dots sm:block hidden md:h-[145px] md:w-[179px] h-[90px] w-[125px] absolute md:bottom-[-300px] bottom-[-155px] md:left-[-639px] left-[-366px] z-30">
              <img src={dots} alt="" className='w-full h-full'/>
            </div>
          </div>
        </Container>
      </section>

      {/* Best Seller Product */}
      <section id="best_seller" className='bg-[#CFA485] md:pt-9 md:pb-[191px] pb-14 pt-4'>
        <Container className='md:pr-[129px] md:pl-[60px] px-2 flex sm:flex-row flex-col md:gap-0 sm:gap-1 gap-y-6 justify-between'>
          <div className="text max-w-[437px] flex flex-col md:gap-[42px] sm:gap-7 gap-6 items-start">
            <h1 className=' md:text-[64px] sm:text-[38px] text-[28px] text-white font-Frank md:font-bold font-semibold'> 
            Best Seller Product
            </h1>
            <p className='md:text-2xl sm:text-base text-xs text-white font-Frank md:font-bold font-medium sm:tracking-normal tracking-wide'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.
            </p>
            <button className='md:px-[91px] px-[35px] md:py-[25px] py-[10px] border border-black md:rounded-[10px] rounded-[5px] bg-black text-white md:text-2xl text-sm font-Poppins md:font-semibold font-medium duration-300 hover:bg-transparent hover:text-black'>
            Learn MORE
            </button>
          </div>
          <div className="product md:mt-5 mt-3 flex gap-y-3 sm:gap-x-3 md:gap-x-[31px] sm:justify-normal justify-between">
            <div className="child">
              <div className="image md:w-[366px] md:h-[424px] sm:w-[200px] sm:h-[260px] w-[170px] h-[210px] object-cover">
                <img src={BS_1} alt="" className='w-full h-full'/>
              </div>
              <div className="text bg-white md:px-[22px] sm:px-2 px-1">
                <div className="stars flex md:gap-4 gap-2 text-[#FFAF37] md:text-xl md:py-[13px] sm:py-2 py-1">
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                </div>
                <h3 className='md:text-[22px] sm:text-lg text-base text-black font-Poppins font-medium md:font-semibold'>
                  Sweater Shirt
                </h3>
                <div className="price flex md:gap-[31px] sm:gap-4 gap-2 md:mt-1 mt-[2px] md:pb-[10px] pb-[6px]">
                  <p className='md:text-2xl sm:text-base text-xs font-Poppins text-[#C4C4C4]'>
                  $45.99
                  </p>
                  <p className='md:text-2xl sm:text-base text-xs font-Poppins text-[#000]'>
                  $35.99
                  </p>
                </div>
              </div>
            </div>
            <div className="child">
              <div className="image md:w-[366px] md:h-[424px] sm:w-[200px] sm:h-[260px] w-[170px] h-[210px] object-cover">
                <img src={BS_2} alt="" className='w-full h-full'/>
              </div>
              <div className="text bg-white md:px-[22px] sm:px-2 px-1">
                <div className="stars flex md:gap-4 gap-2 text-[#FFAF37] md:text-xl md:py-[13px] sm:py-2 py-1">
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                </div>
                <h3 className='md:text-[22px] sm:text-lg text-base text-black font-Poppins font-medium md:font-semibold'>
                  Pants fashion
                </h3>
                <div className="price flex md:gap-[31px] sm:gap-4 gap-2 md:mt-1 mt-[2px] md:pb-[10px] pb-[6px]">
                  <p className='md:text-2xl sm:text-base text-xs font-Poppins text-[#C4C4C4]'>
                  $55
                  </p>
                  <p className='md:text-2xl sm:text-base text-xs font-Poppins text-[#000]'>
                  $49.99
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Container>

      </section>
    </div>
  )
}

export default Home