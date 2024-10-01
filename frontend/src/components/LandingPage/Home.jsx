import React from 'react'
import imgsrc from '../assets/bannerimg.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="od:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                  <motion.div
                  variants={fadeIn("down",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:true, amount:0.7}}
                  >
                    {/* VECTOR IMG */}
                    <img src={imgsrc} />
                  </motion.div>

              <motion.div 
              variants={fadeIn("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:true, amount:0.7}}

              className="md:w-3/5">
                  <h2 className="md:text-6xl text-4xl font-bold text-white mb-6 leading-relaxed">Develop Your Skills</h2>
                  <p className="text-[#EBEBEB] text-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum aut autem mollitia provident est nulla, et magni quisquam molestias, nobis perspiciatis deserunt soluta veritatis iure obcaecati aliquid quibusdam tempore accusamus.</p>
                  <div className='py-3'>
                    <button className="btnPrimary">Get Started</button>
                  </div>
                  
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Home
