import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import MediaQuery from 'react-responsive'
import { slide as Menu } from 'react-burger-menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
const Navigation = () => {

    const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const handleMobileMenuOpenClose = () => {
        setMobileMenuStatus(!mobileMenuStatus)
    }
    useEffect(() => {
        setIsMounted(true)
    },[])
  return isMounted ? 
    (
    <div className='w-[100vw] fixed bg-[#000000b7] font-press z-50 flex justify-between md:justify-around items-center h-[50px] px-3'>
        <div className='nav-header text-white'>DevBy<span className='text-[#56daca]'>Mat</span></div>
        <MediaQuery minWidth={768}>
            <div className='nav-links text-[#16A34A] h-full flex gap-5 justify-center items-center'>
                <Link className='h-full' spy={true} smooth={true} to='home'><span className='cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2 flex items-center h-full'>Home</span></Link>
                <Link className='h-full' activeClass='navactive' offset={-100} spy={true} smooth={true} to='skills'><span className='cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex items-center h-full'>Skills</span></Link>
                <Link className='h-full' activeClass='navactive' offset={-100} spy={true} smooth={true} to='tools'><span className='cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex items-center h-full'>Tools</span></Link>
                <Link className='h-full' activeClass='navactive' offset={-100} spy={true} smooth={true} to='goals'><span className='cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex items-center h-full'>About</span></Link>
                <Link className='h-full' activeClass='navactive' offset={-100} spy={true} smooth={true} to='projects'><span className='cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex items-center h-full'>Projects</span></Link>
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}> 
            <div className='relative '>
                {/* <GiHamburgerMenu onClick={handleMobileMenuOpenClose} color='#FF4F53' size={50} /> */}
                <Menu onClose={handleMobileMenuOpenClose} onOpen={handleMobileMenuOpenClose} customCrossIcon={<AiFillCloseCircle color='#FF4F53' size={50}/>} customBurgerIcon={<GiHamburgerMenu color='#FF4F53' size={50}/>}  right width={"100%"} isOpen={mobileMenuStatus} className='relative top-0 bg-[#000000b7] text-white w-full'>
                    <div className='mobile-nav-header w-full flex flex- text-white h-[50px] bg-black'><span className='flex justify-center items-center'>DevBy</span><span className='text-[#56daca] flex justify-center items-center'>Mat</span></div>
                    <div className='burger-links flex flex-col  h-full text-[22px]'>
                        <Link onClick={handleMobileMenuOpenClose} smooth={true} to='home'><span className='h-[80px] cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2 flex justify-center items-center'>Home</span></Link>
                        <Link onClick={handleMobileMenuOpenClose} offset={-100} smooth={true} to='skills'><span className='w-full h-[80px] cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex justify-center items-center '>Skills</span></Link>
                        <Link onClick={handleMobileMenuOpenClose} offset={-100} smooth={true} to='tools'><span className='h-[80px] cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex justify-center items-center'>Tools</span></Link>
                        <Link onClick={handleMobileMenuOpenClose} offset={-100} smooth={true} to='goals'><span className='h-[80px] cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex justify-center items-center'>About</span></Link>
                        <Link onClick={handleMobileMenuOpenClose} offset={-100} smooth={true} to='projects'><span className='h-[80px] cursor-pointer bg-none hover:bg-[#FF4F53] hover:text-white px-2  flex justify-center items-center'>Projects</span></Link>                        
                    </div>
                </Menu>
            </div>
        </MediaQuery>
    </div>
  ) : 
  null
}

export default Navigation
