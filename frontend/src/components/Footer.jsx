import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8'>
                <a className='text-2xl font-semibold flex items-center space-x-3 text-black'>
                    {/* IMAGE */}
                    <span className='text-white'>LOGO</span>
                </a>
                <p className='md:w-1/2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus est repellendus totam. Unde iure repellat.
                </p>
                <div>
                    <input type="email" name="email" id="email" placeholder='Your email'
                    className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"/>
                    <input type="submit" value="Subscribe" className='px-4 py-2 bg-purple-500 rounded-md ml-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300' />
                </div>
            </div>

            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/" className='block hover:text-gray-300'>Features</a>
                        <a href="/" className='block hover:text-gray-300'>About</a>
                        <a href="/" className='block hover:text-gray-300'>Contact</a>
                    </ul>
                </div>
            </div>
            <div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Help</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>How does it work?</a>
                        <a href="/" className='block hover:text-gray-300'>Where to ask question?</a>
                        <a href="/" className='block hover:text-gray-300'>How to play?</a>
                        <a href="/" className='block hover:text-gray-300'>What is needed for this?</a>
                    </ul>
                </div>
            </div>
            <div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Contacts</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>Phone Number</a>
                        <a href="/" className='block hover:text-gray-300'>xyz xyz</a>
                        <a href="/" className='block hover:text-gray-300'>xyz xyz</a>
                    </ul>
                </div>
            </div>
        </div>
        
        <hr/>

        <div className='flex flex-colsm:flex-row gap-8 sm:items-center justify-between my-8 text-gray-400'>
            <p>All rights reserved.</p>
            <div>NAMES</div>
        </div>
      
    </div>
  )
}

export default Footer
