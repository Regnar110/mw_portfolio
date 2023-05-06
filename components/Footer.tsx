import React from 'react'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <footer className='w-full flex flex-col md:flex-row justify-around items-center py-4 text-[#3C4858] text-[12px]'>
      <div className='footer_links flex gap-5 font-semibold'>
        <Link className='cursor-pointer' smooth={true} to='home'>Home</Link>
        <Link className='cursor-pointer' smooth={true} to='skills'>Skills</Link>
        <Link className='cursor-pointer' smooth={true} to='tools'>Tools</Link>
        <Link className='cursor-pointer' smooth={true} to='about'>About</Link>
        <Link className='cursor-pointer' smooth={true} to='projects'>Projects</Link>
      </div>
      <div className='signature'>
            @ 2023, Created by Mateusz - Regnar110 <a className='font-semibold' href='https://github.com/Regnar110'>GITHUB</a>
      </div>
    </footer>
  )
}

export default Footer