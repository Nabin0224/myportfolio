"use client"
import Footer from '@/components/ui/front/Footer'
import Navbar from '@/components/ui/front/Navbar'
import ResourceButton from '@/components/ui/ShapeButton'
import { div } from 'framer-motion/client'
import myimg from '@/public/portfolioImg.jpg'
import React from 'react'

const Info = () => {
  console.log(myimg, "myimg")
  return (
    <div>
      <Navbar/>
      <div className="hero h-[60vh] flex justify-between items-center w-[80%] mx-auto">
        <h2 className='text-5xl md:text-7xl font-open-sans font-extrabold inline-block scale-y-145 text-neon text-white/60'>HELLO, I AM NABIN BUDHATHOKI, <br /> FULL STACK DEVELOPER.</h2>
      </div>
      <div className="skills flex md:flex-row flex-col w-[80%] mx-auto gap-6 md:gap-80">
        <div className="about text-2xl md:text-5xl font-sans md:w-[55%]">
        <div className="buttons  flex gap-4 justify-start items-center">
              <ResourceButton value="ABOUT" className='py-3.5 px-0'/>
              <ResourceButton value="ME" className='py-3.5' />
             
           </div>
            <p className='mt-10 text-neon text-white/80'>I work remotely with product, design, and engineering teams to build reliable and scalable digital products. As a full-stack developer, I specialize in creating modern web experiences using React, Node.js, and the MERN stack.
            I also run my own projects and e-commerce platforms, exploring intersections of tech, design, and business.</p>
        </div>
        <div className="about md:w-[30%] mt-8 md:mt-0 ">
           <div className="buttons flex gap-2 md:justify-end items-center">
              <ResourceButton value="I" className='py-3.5 px-0'/>
              <ResourceButton value="AM" className='py-3.5 px-0'/>
              <ResourceButton value="REALLY" className='py-3.5 px-0 '/>
              <ResourceButton value="GOOD AT" className='py-3.5 px-0'/>
           </div>
           <div className="md:w-[50%] m-auto skills flex flex-col mt-10 font-helvetica leading-6 md:leading-5 text-muted text-neon md:text-start">
            <ul className='text-start md:text-center md:ml-20'>
              <li>JavaScript</li>
              <li>React</li>
              <li>TailwindCss</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
           </div>
          <div className="portfolioImg mt-16 md:mt-28">
          <img src={myimg.src} alt="" className='h-64 md:h-auto' />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Info