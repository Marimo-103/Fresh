import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import IntroBanner from '../Components/IntroBanner'

const Home = () => {
  return (
    <div>
      {/* intro banner */}
      <section id="intro" className='md:pt-[236px] md:pb-[102px] pt-28 pb-10 px-2 md:px-0 bg-[#FAE3B6] md:rounded-b-[20px] rounded-b-[10px]'>
        <Container className='md:px-[80px]'>
          <IntroBanner/>
        </Container>
      </section>
      
      {/* new collection */}
      <section id="new_collection" className='pt-[217px] bg-white md:px-[74px] px-2'>
        <Container className=''>

        </Container>
      </section>
    </div>
  )
}

export default Home