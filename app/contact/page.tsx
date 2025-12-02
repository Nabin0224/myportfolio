"use client"
import Footer from '@/components/ui/front/Footer'
import Navbar from '@/components/ui/front/Navbar'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Separator from '@/components/ui/Separator'
import React, { useState } from 'react'

const Contact = () => {
  const [showCopy, setShowCopy] = useState("Click to copy");
  const [isHover, setIsHover] = useState(false);

  const handleCopy = async ()=>  {
    try {
      await navigator.clipboard.writeText("nabinbudhathoki2004@gmail.com");
      
      setShowCopy("Copied")
    } catch (err) {
      setShowCopy('Failed to copy!');
      console.error('Failed to copy text: ', err);
    }
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen min-w-screen overflow-x-hidden'>
    <Navbar />
     <div className='h-[30%] flex justify-center items-center'>
      <p className='text-muted text-neon text-center w-[60%]'>Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
     </div>
     <div className="relative gmail text-center h-[20%] ">
     <Separator/>
      <p className='text-2xl md:text-6xl text-neon m-20 cursor-pointer'
      onMouseEnter={()=> setIsHover(true)}
      onMouseLeave={()=> setIsHover(false)}
      onClick={()=> handleCopy()}
      >nabinbudhathoki2004@gmail.com</p>
      { isHover && <div className='absolute top-35 left-[220px] md:top-40 md:left-[700px]'><PrimaryButton btnText={showCopy}/></div>}
     <Separator />
     </div>
     <div className="social flex justify-center items-center h-[50%]">
     <div className="buttons-wrapper flex md:justify-center md:items-end">
     <PrimaryButton btnText="Linkedn" href='https://www.linkedin.com/in/budhathoki-nabin/'/>
      <PrimaryButton btnText="Github" href='https://github.com/Nabin0224'/>
      <PrimaryButton btnText="Facebook" href='https://www.facebook.com/nabin.budhathoki.196568'/>
      <PrimaryButton btnText="Instagram" href='https://www.instagram.com/nabin_0224?igsh=ZXV2M243YWlsZHox&utm_source=qr'/>
     </div>
     </div>
    </div>
    </>
  )
}

export default Contact