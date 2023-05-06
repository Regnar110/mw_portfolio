import React from 'react'
import Image from 'next/image'
import apart from '../public/projects/apart.png'
import apple from '../public/projects/apple.webp'
import weather from '../public/projects/weather.png'
import portfolio from '../public/projects/portfolio.png'
import {FaGithubAlt} from 'react-icons/fa'
import {RiDoorOpenFill} from 'react-icons/ri'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='projects flex flex-col rounded-lg'>
        <div className='header_neon relative flex justify-center mb-14 lg:mb-32'>
            <h1 className="text-white font-press neon-text text-3xl lg:text-4xl text-center">MY PROJECTS </h1>
        </div>
        <div className='project_list font-press flex flex-col gap-5'>
            <div className='single_project flex flex-col xl:flex-row overflow-hidden'>
                <Image className='w-full xl:w-1/2' src={apart} alt='apart' />
                <div className='single_project_desc flex flex-col items-center gap-5  p-4'>
                    <h1 className='text-[18px] md:text-[22px] text-[#017ACC]'>Apart Shop</h1>
                    <p className='h-full text-[10px] md:text-[12px] text-black text-center'>
                        This project is a simplified version of the apart store created with <span className='text-[#16A34A]'>Javascript</span>, <span className='text-[#16A34A]'>Typescript</span>, <span className='text-[#16A34A]'>React</span>, <span className='text-[#16A34A]'>Next.js</span>, <span className='text-[#16A34A]'>Redux Toolkit</span> and other support libraries.
                        The main assumption of this project was to use <span className='text-[#16A34A]'>MongoDb</span> and <span className='text-[#16A34A]'>Sanity CMS</span> as a product and product category management system, as well as to implement store-specific functionalities such as a wish list, 
                        shopping cart, payments, new user registration, logging in and storing some elements of the application state in the browser's cache.
                    </p>
                    <div className='buttons flex gap-5'>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://github.com/Regnar110/apart_redesign">
                            <FaGithubAlt color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Github</span>
                        </Link>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://apartredesign.netlify.app/">
                            <RiDoorOpenFill color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Visit</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='single_project flex flex-col xl:flex-row-reverse'>
                <Image className='w-full xl:w-1/2' src={apple} alt='apart' />                             
                <div className='single_project_desc flex flex-col items-center gap-5  p-4'>
                    <h1 className='text-[18px] md:text-[22px] text-[#017ACC]'>Apple Shop</h1>
                    <p className='h-full text-[10px] md:text-[12px] text-black text-center'>
                        This project is a simplified version of the Apple Store. The project was created using <span className='text-[#16A34A]'>Javascript</span>, <span className='text-[#16A34A]'>Typescript</span>, <span className='text-[#16A34A]'>React</span>, <span className='text-[#16A34A]'>Next.js</span>, <span className='text-[#16A34A]'>Redux Toolkit</span> and other support libraries.
                        The site is based on <span className='text-[#16A34A]'>Sanity CMS</span> which allows you to manage the product database. In addition, it is possible to add to the basket, proceed to payment and log in using Google.
                    </p>
                    <div className='buttons flex gap-5'>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://github.com/Regnar110/apple_redesign">
                            <FaGithubAlt color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Github</span>
                        </Link>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://devbymat-appleredesign.netlify.app/">
                            <RiDoorOpenFill color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Visit</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='single_project flex flex-col xl:flex-row'>
                <Image className='w-full xl:w-1/2' src={weather} alt='apart' />                             
                <div className='single_project_desc flex flex-col items-center gap-5  p-4'>
                    <h1 className='text-[18px] md:text-[22px] text-[#017ACC]'>Weather App</h1>
                    <p className='h-full text-[10px] md:text-[12px] text-black text-center'>
                        Weather App is an application written using <span className='text-[#16A34A]'>React</span> and <span className='text-[#16A34A]'>Node.js</span> + <span className='text-[#16A34A]'>Express.js</span> backend. The application uses several Google programming interfaces such as GeoLocation, Reverse Geolocation, TimeZone, Places (for autocomplete searches for places) and the OpenMeteo API and Navigator API of the browser, which allows you to obtain the user's location.
                        The application presents seven-day weather data, with animated icons, the current time, sunrise and sunset times, and current weather data for the day.
                    </p>
                    <div className='buttons flex gap-5'>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://github.com/Regnar110/react_weather">
                            <FaGithubAlt color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Github</span>
                        </Link>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://regnar110weatherapp.netlify.app/">
                            <RiDoorOpenFill color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Visit</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='single_project flex flex-col xl:flex-row-reverse'>
                <Image className='w-full xl:w-1/2' src={portfolio} alt='apart' />                             
                <div className='single_project_desc flex flex-col items-center gap-5  p-4'>
                    <h1 className='text-[18px] md:text-[22px] text-[#017ACC]'>Portfolio</h1>
                    <p className='h-full text-[10px] md:text-[12px] text-black text-center'>
                        A simple one-page website. Used using <span className='text-[#16A34A]'>React</span>. It introduces me as a developer and presents my projects.
                    </p>
                    <div className='buttons flex gap-5'>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://github.com/Regnar110/mw_portfolio">
                            <FaGithubAlt color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Github</span>
                        </Link>
                        <Link className='flex flex-col justify-center items-center border-[1px] shadow-xl p-3' href="https://devbymatfolio.netlify.app/">
                            <RiDoorOpenFill color='#AA1C31' size={40}/>
                            <span className='text-[12px]'>Visit</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
