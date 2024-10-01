import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <motion.div 
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}
        className='md:w-1/2'>
            {/* Vector */}
        </motion.div>

        <motion.div
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}
        className='md:w-2/5'>
            <h2 className='md:text-5xl text-3xl font-bold text-black mb-5'>We have been improving our product <span className='text-purple-500'>for many years.</span></h2>
            <p className='text-gray-600 text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, temporibus! Quia natus iste cum inventore velit eum excepturi, voluptates maxime reprehenderit perferendis, beatae voluptatem molestiae, saepe quo! Porro, architecto culpa.</p>
            <button className='btnPrimary'>Get Started</button>
        </motion.div>
      </div>


        <div className='h-8'></div>


      <div className='flex flex-col md:flex-row-reverse mt-28 justify-between items-center gap-8'>
        <motion.div
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}
        className='md:w-1/2'>
            {/* Vector */}
        </motion.div>
        <motion.div
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}
        className='md:w-2/5'>
            <h2 className='md:text-5xl text-3xl font-bold text-black mb-5'>We have been improving our product <span className='text-purple-500'>for many years.</span></h2>
            <p className='text-gray-600 text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, temporibus! Quia natus iste cum inventore velit eum excepturi, voluptates maxime reprehenderit perferendis, beatae voluptatem molestiae, saepe quo! Porro, architecto culpa.</p>
            <button className='btnPrimary'>Get Started</button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
