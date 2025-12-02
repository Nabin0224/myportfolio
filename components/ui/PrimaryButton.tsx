'use client'
import playAudio from '@/app/lib/playAudio'
import React from 'react'

interface ButtonProps {
  btnText: string
  href?: string     
}

const PrimaryButton = ({ btnText, href }: ButtonProps) => {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank")   
    }
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={playAudio}
      className="rounded-2xl outline-gray-700 outline-1 hover:ring-[3px] hover:text-neon hover:text-primary hover:ring-[var(--color-primary)] hover:shadow-[0_0_15px_4px_var(--color-primary)] px-4 py-2 m-1 text-sm transition-all duration-300"
    >
      <span>{btnText}</span>
    </button>
  )
}

export default PrimaryButton