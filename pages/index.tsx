import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import background from '../public/image.jpg'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import Typewriter from 'typewriter-effect';
import person from '../public/person.png'
import writing_code from '../public/writing_code.png'
import responsive_design from '../public/responsive_design.jpg'
import { Slide } from "react-awesome-reveal";

export default function Home() {

  const background: BannerLayer = {
    image:
      'https://i.imgur.com/lAUqwUQ.png',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col font-press text-white gap-y-14 text-center">
        <span className='text-2xl'>Hi! My name is <span className='text-[#01F0D6]'>Mateusz</span></span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl ">
          <Typewriter
            options={{
              strings: ["Im Front-End Developer", "I hope we get along :)"],
              autoStart: true,
              loop: true,
            }}
          /> 
        </h1>
      </div>
    ),
  };

  
  const foreground: BannerLayer = {
    image:
      'https://labs.phaser.io/assets/tests/parallax/foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const foreground2: BannerLayer = {
    image:
      'https://www.pulpandwire.com/wp-content/uploads/2019/07/land.png',
    translateY: [50, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };


  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <section className='main relative bg-[#E0E0E0]'>
    <ParallaxBanner 
      layers={[background,foreground,headline, foreground2, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900 h-[100vh] lg:h-auto"
    />
    <Parallax speed={20}>
        <div className=' relative top-[-120px] mx-2  md:mx-6  bg-white shadow-2xl rounded-lg flex flex-col'>
          <Parallax speed={10} className='m-0 p-0'>
            <div className='section_image w-full flex justify-center relative top-[-50px] lg:top-[-100px]'>
              <div className='landing_circle relative w-[180px] lg:w-[250px] rounded-full overflow-hidden border-[3px] border-white shadow-2xl'>
                <Image width={250} src={person} alt="red_person"/>
              </div>
            </div>     
          </Parallax>
          <div className='skills flex flex-col gap-y-6 md:gap-y-20'>
            <div className='header_neon relative flex justify-center mb-32'>
              <h1 className="text-white font-press neon-text text-3xl lg:text-4xl">SKILLS</h1>
            </div>       
            <div className='writing_code grid xl:grid-cols-2 justify-items-center gap-y-8 md:gap-0 overflow-hidden'>
              <Slide direction='left'>
                <div className='skill_image relative w-[280px] md:w-[600px] order-0'>
                  <Image src={writing_code} alt='writing_code' />
                </div>
              </Slide>
              <Slide direction='right'>
                <div className='skill_desc w-full font-press justify-self-start flex flex-col justify-center gap-10 order-1'>
                  <div className='skill_header  text-[14px] md:text-[32px] flex justify-center'>
                    <span className='text-[#017ACC]'>{"<> "}</span>
                    <span>Writing Code</span>
                    <span>
                      <Typewriter
                        options={{
                          strings: [""],
                          autoStart: true,
                          loop: true,
                        }}
                      /> 
                    </span>
                    <span className='text-[#017ACC]'>{"</>"}</span>
                  </div>
                  <div className='description flex flex-col justify-center items-start text-[13px] md:text-[16px] px-6 '>
                    <span className='text-[#017ACC]'>{"<span>"}</span>
                    <span className='ml-5'>I create websites and applications using the Javascript programming language. I also use different tools that make my code re-usable, more readable and easier to manage.</span>
                    <span className='text-[#017ACC]'>{"</span>"}</span>
                  </div>
                </div>
              </Slide>


            </div>
            <div className='responsive_design grid xl:grid-cols-2 justify-items-center gap-y-8 md:gap-0 overflow-hidden'>
                <div className='skill_image relative w-[280px] md:w-[600px] order-0 xl:order-1'>
                <Slide direction='right'>
                  <Image src={responsive_design} alt='responsive_design' />
                </Slide>                
              </div>                

              <Slide direction='left'>
                <div className='skill_desc w-full font-press justify-self-start flex flex-col justify-center gap-10'>
                  <div className='skill_header  text-[14px] md:text-[32px] flex justify-center'>
                    <span className='text-gray-600'>{"<"}</span>
                    <span className='text-green-600'>Responsive Design</span>
                    <span>
                      <Typewriter
                        options={{
                          strings: [""],
                          autoStart: true,
                          loop: true,
                        }}
                      /> 
                    </span>
                    <span className='text-gray-600'>{"/>"}</span>
                  </div>
                  <div className='description flex flex-col justify-center items-start text-[13px] md:text-[16px] px-6'>
                    <span className='text-[#017ACC]'>{"<p>"}</span>
                    <span className='ml-5'>When creating websites and applications, I always work in such a way that they are adapted to both desktop and mobile devices.</span>
                    <span className='text-[#017ACC]'>{"</p>"}</span>
                  </div>
                </div>                
              </Slide>

            </div>
          </div>
        </div>
    </Parallax>
        
   
     

    </section>
  )
}
