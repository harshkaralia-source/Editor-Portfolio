import React from 'react'

const About = () => {

  const experiences = [
    {
      duration: 'SIX MONTHS',
      company: 'KAITHAL BREAKING TV',
      role: 'VIDEO EDITOR',
      description:
        'Worked as a video editor in Kaithal Breaking TV, a very famous Facebook page, and I created 3-4 videos per day.',
    },
    {
      duration: 'ONE YEAR',
      company: 'SANDHU LIVE PRODUCTION',
      role: 'COMPUTER OPERATOR',
      description:
        'Worked in Sandhu Live Sports as a computer operator. Assembled raw footage with live camera shots to prepare professional sports footage.',
    },
    {
      duration: 'ONE YEAR',
      company: 'FOUJI MUSIC COMPANY',
      role: 'VIDEO EDITOR & GRAPHIC DESIGNER',
      description:
        'Worked as the senior video editor in Karambir Fouji’s music company, managing YouTube channels with millions of subscribers.',
    },
    {
      duration: '28 DAYS',
      company: 'STAR SPORTS',
      role: 'VIDEO EDITOR / LIVE',
      description: 'Worked with Star Sports during the Legends League Cricket (LLC) tournament on a 28-day contract. Edited match highlights, promotional content, and player interviews to enhance audience engagement.'
    }
  ];

  const skills = [
    { 'name': 'After Effects', 'logo': '/after effects.png', 'progress': 'w-[95px]' },
    { 'name': 'Filmora', 'logo': '/filmora.png', 'progress': 'w-[160px]' },
    { 'name': 'Final Cut Pro', 'logo': '/final cut pro.png', 'progress': 'w-[180px]' },
    { 'name': 'Illustrator', 'logo': '/illustrator.png', 'progress': 'w-[85px]' },
    { 'name': 'Photoshop', 'logo': '/photoshop.png', 'progress': 'w-[158px]' },
    { 'name': 'Premier Pro', 'logo': '/premier pro.png', 'progress': 'w-[150px]' },
  ]

  return (
    <div className='py-8' id='about'>
      <h2 className="text-[#FFD14C] font-bold text-2xl text-center pb-4">About me</h2>
      <p className='text-slate-200'>Professional video editor with 3+ years of experience with advanced video editing skills and knowledge of latest video editing softwares, tools and techniques. Saved the editing team 10+ hours each week. Seeking position to grow personally and professionally in video editing role.</p>

      <h3 className="text-slate-400 font-bold text-xl pt-8 text-center pb-4">Experience</h3>
      <div className="grid grid-cols-4 gap-6 text-left">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="font-bold text-[#FFD14C]">{exp.duration}</div>
            <div className="col-span-3">
              <h3 className="font-bold text-[#FFD14C]">{exp.company}</h3>
              <p className="font-bold">{exp.role}</p>
              <p className='text-sm text-slate-300'>{exp.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      <h3 className="text-slate-400 font-bold text-xl pt-8 text-center pb-5">Skills</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((index) => (
          <div key={index.name} className='flex justify-around items-center gap-5 bg-slate-600 rounded-md p-2 px-4 w-fit mx-auto'>
            <img src={index.logo} className='w-10' alt="" />
            <div className="flex flex-col gap-2">
            <p className='-mt-2'>{index.name}</p>
            <div className="progressbar w-[200px] h-0 border border-white relative">
              <div className={`${index.progress} progress border border-orange-400 absolute -top-[1px] -left-[1px]`}></div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
