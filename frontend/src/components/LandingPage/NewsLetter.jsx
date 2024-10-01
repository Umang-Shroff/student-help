import React from 'react'

const NewsLetter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                  <div>
                    {/* VECTOR IMG */}
                  </div>
              <div className="md:w-3/5">
                  <h2 className="md:text-6xl text-4xl font-bold text-white mb-6 leading-relaxed">Develop Your Skills</h2>
                  <p className="text-[#EBEBEB] text-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum aut autem mollitia provident est nulla, et magni quisquam molestias, nobis perspiciatis deserunt soluta veritatis iure obcaecati aliquid quibusdam tempore accusamus.</p>
                  <div className='py-3'>
                    <button className="btnPrimary">Get Started</button>
                  </div>
                  
              </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
