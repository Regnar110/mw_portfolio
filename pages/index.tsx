import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import background from '../public/image.jpg'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

export default function Home() {

  const background: BannerLayer = {
    image:
      'https://cdn.pixabay.com/photo/2021/03/22/01/58/monk-6113501_960_720.png',
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
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">
          Hello World!
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
    translateY: [70, 15],
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
    <section className='main relative h-[600px] bg-[#E0E0E0]'>
    <ParallaxBanner 
      layers={[background,foreground,headline, foreground2, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
    />

        {/* <div className={`fluid_bakground_with_content h-[400px] bg-[url(../public/image.jpg)] bg-center bg-cover text-white text-[50px]`}>wewW</div>      */}
        <div className=' relative top-[-100px] mx-6 h-[700px] bg-white shadow-2xl rounded-lg'>
            
        </div>           
   
     

    </section>
  )
}
