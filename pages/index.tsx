import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import background from '../public/image.jpg'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import Typewriter from 'typewriter-effect';
import person from '../public/person.png'

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
        <div className=' relative top-[-120px] mx-2  md:mx-6 h-[700px] bg-white shadow-2xl rounded-lg'>
          <Parallax speed={10}>
            <div className='w-[250px] rounded-full overflow-hidden absolute lg:left-1/2 transform right-0 lg:-translate-x-1/2 top-[-100px] shadow-xl border-[3px] border-white'>
              <Image src={person} alt="red_person"/>
            </div>            
          </Parallax>
        </div>         
        <div className="absolute w-full flex justify-center lg:justify-start top-[-140px] lg:top-[-30px] container  text-center">
          <h1 className="text-white lg:rotate-[-45deg] font-press neon-text text-3xl lg:text-5xl">SKILLS</h1>
        </div>
    </Parallax>
        
   
     

    </section>
  )
}
