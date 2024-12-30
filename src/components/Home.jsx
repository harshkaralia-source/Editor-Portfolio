import React from 'react'

const Home = () => {
    return (
        <div className='py-7 md:py-14 md:flex items-center justify-between' id='home'>
            <div className="w-full flex flex-col justify-center">
                <h1 className='text-[#FFD14C] font-bold text-4xl'>Welcome to my website</h1>
                <h2 className='font-medium text-3xl pb-2 pt-1'>I am Aman Arya</h2>
                <p className='text-slate-400 text-sm'>Professional video editor with 2+ years of experience and knowledge of latest video editing softwares, tools and techniques.</p>
                    <button className="px-4 py-3 text-slate-700 mt-4 bg-[#FFD14C] rounded-md text-sm w-full sm:w-fit md:text-xs">
                <a href="#contact" className=''>
                        Contact me
                </a>
                    </button>
            </div>
            <div className="w-full flex items-center justify-center px-4 pt-8 md:pt-0">
                <img src="/pc.png" className='w-[350px] sm:w-[400px]' alt="" />
            </div>
        </div>
    )
}

export default Home
