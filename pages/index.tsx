import Head from 'next/head'
import Image from 'next/image'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import Typewriter from 'typewriter-effect';
import person from '../public/person.png'
import writing_code from '../public/writing_code.png'
import responsive_design from '../public/responsive_design.jpg'
import { Slide, Zoom } from "react-awesome-reveal";

import js from '../public/tools/js.png'
import ts from '../public/tools/typescript.png'
import html from '../public/tools/html.png'
import css from '../public/tools/css.jpg'
import tailwind from '../public/tools/tailwind.jpg'
import react from '../public/tools/React.png'
import next from '../public/tools/next.png'
import redux from '../public/tools/redux.png'
import mui from '../public/tools/mui.png'
import sanity from '../public/tools/sanity.png'
import mongodb from '../public/tools/mongodb.png'
import reactform from '../public/tools/reactform.jpg'
import Projects from '@/components/Projects';


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
    <section className='main relative bg-[#aa1c31]'>
    <ParallaxBanner 
      layers={[background,foreground,headline, foreground2, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900 h-[100vh] lg:h-auto"
    />
    <Parallax speed={20}>
        <div className=' relative top-[-200px] mx-2  md:mx-6  bg-white shadow-2xl rounded-lg flex flex-col'>
          <Parallax speed={10} className='m-0 p-0'>
            <div className='section_image w-full flex justify-center relative top-[-50px] lg:top-[-100px]'>
              <div className='landing_circle relative w-[180px] lg:w-[250px] rounded-full overflow-hidden border-[3px] border-white shadow-2xl'>
                <Image width={250} src={person} alt="red_person"/>
              </div>
            </div>     
          </Parallax>
          <div className='skills flex flex-col gap-y-6 md:gap-y-20 mb-16'>
            <div className='header_neon relative flex justify-center'>
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
          <div className='tools flex flex-col mb-16'>
            <div className='header_neon relative flex justify-center mb-14 lg:mb-32'>
              <h1 className="text-white font-press neon-text text-3xl lg:text-4xl text-center">TOOLS I USE </h1>
            </div>  
            <div className='tools-images grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-4'>
                <Zoom>
                  <Image width={200} src={html} alt="js"/>
                  <Image width={200} src={css} alt="js"/>
                  <Image width={200} src={js} alt="js"/>
                  <Image width={200} src={ts} alt="js"/>
                  <Image width={200} src={react} alt="js"/>
                  <Image width={200} src={next} alt="js"/>
                  <Image width={280} src={redux} alt="js"/>
                  <Image width={280} src={reactform} alt="js"/>
                  <Image width={280} src={tailwind} alt="js"/>
                  <Image width={280} src={mui} alt="js"/>
                  <Image width={280} src={sanity} alt="js"/>
                  <Image width={280} src={mongodb} alt="js"/>                
                </Zoom>
            </div>
          </div>
          <div className='my_goals relative flex flex-col mb-16 px-5 md:p-0'>
            <div className='header_neon relative flex justify-center mb-14 lg:mb-32 z-50'>
              <h1 className="text-white font-press neon-text text-3xl lg:text-4xl text-center">HOW I WORK</h1>
            </div>
            <div className='goals-desc font-press z-50 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-7'>
              <div className='commitment w-fit flex flex-col items-start'>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"<"}</span>
                  <span className='text-green-600'>CommitmentToWork</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>
                <p className='text-black text-[11px] md:text-[14px] w-full md:w-[600px]  flex pl-10'>
                  I approach each project individually. 
                  I select solutions used in projects individually for each of them based on the needs of the project. 
                  I am always fully committed to the work I do.
                </p>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"</"}</span>
                  <span className='text-green-600'>CommitmentToWork</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>                
              </div>
              <div className='reaction w-fit flex flex-col items-start'>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"<"}</span>
                  <span className='text-green-600'>Reaction</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>
                <p className='text-black w-full text-[11px] md:text-[14px] md:w-[600px] flex pl-10'>
                  I want my projects to be at an ever-higher level, and the reaction of people who watch them is always the best.
                </p>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"</"}</span>
                  <span className='text-green-600'>Reaction</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>                
              </div>
              <div className='opinion w-fit flex flex-col items-start'>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"<"}</span>
                  <span className='text-green-600'>Opinion</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>
                <p className='text-black w-full md:w-[600px] text-[11px] md:text-[14px] flex pl-10'>
                  I always take into account the opinion of other people - it is the basis for my development as a front-end developer.
                </p>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"</"}</span>
                  <span className='text-green-600'>Opinion</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>                
              </div>
              <div className='development w-fit flex flex-col items-start'>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"<"}</span>
                  <span className='text-green-600'>Development</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>
                <p className='text-black w-full text-[11px] md:text-[14px] md:w-[600px] flex pl-10'>
                  I create new projects and take part in various courses, exchange experiences with other developers - this is my way of development.
                </p>
                <div className='goals_header  text-[14px] md:text-[22px] flex justify-center'>
                  <span className='text-gray-600'>{"</"}</span>
                  <span className='text-green-600'>Development</span>
                  <span className='text-gray-600'>{">"}</span>
                </div>                
              </div>
            </div>
            <div className='goals-footer font-press w-full flex justify-center items-center z-50 mt-10'>
              <p className='text-black w-full text-[11px] md:text-[14px] md:w-[600px] text-center'>
                Commitment, willingness to get the best result and learning from mistakes and criticism of others are the basis for my development. 
                Therefore, in my work I apply the above factors.
              </p>
            </div>
          </div>
          <Projects/>
        </div>
    </Parallax>
        
   
     

    </section>
  )
}
