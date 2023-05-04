import React from 'react'
import Image from 'next/image'
import apart from '../public/projects/apart.png'
const Projects = () => {
  return (
    <div className='projects flex flex-col'>
        <div className='header_neon relative flex justify-center mb-14 lg:mb-32'>
            <h1 className="text-white font-press neon-text text-3xl lg:text-4xl text-center">MY PROJECTS </h1>
        </div>
        <div className='project_list font-press'>
            <div className='single_project flex flex-row'>
                <Image width={1000} src={apart} alt='apart' />
                <div className='single_project_desc flex flex-col items-center gap-5  p-4'>
                    <h1 className='text-[22px] text-[#017ACC]'>Apart Shop</h1>
                    <p className='h-full text-black text-center'>
                        This project is a simplified version of the apart store created with <span className='text-[#16A34A]'>Javascript</span>, <span className='text-[#16A34A]'>Typescript</span>, <span className='text-[#16A34A]'>React</span>, <span className='text-[#16A34A]'>Next.js</span>, <span className='text-[#16A34A]'>Redux Toolkit</span> and other support libraries.
                        The main assumption of this project was to use <span className='text-[#16A34A]'>MongoDb</span> and <span className='text-[#16A34A]'>Sanity CMS</span> as a product and product category management system, as well as to implement store-specific functionalities such as a wish list, 
                        shopping cart, payments, new user registration, logging in and storing some elements of the application state in the browser's cache.
                    </p>
                    <div className='buttons'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
