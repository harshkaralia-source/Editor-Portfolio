import React from 'react'

const Work = () => {
    const shortMovies = [
        {
            'id': 1,
            'label': 'Short Movies',
            'videos': [
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/zdgTATu4YVY?si=hAbfinraTfC8B9XQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/pUaEQbURmE8?si=qIaAMln6YFF5Cj13" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/Khqik-3ICRM?si=pgc95TQeYROPF23x" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ]
        }
    ]

    const songs = [
        {
            'id': 2,
            'label': 'Songs',
            'videos': [
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/Id3ZHDwyTc4?si=Tzn7YW-K97qN13lx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/CgJDMBUfpvI?si=e-5vvLnqM26BsQ9r" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/wBAmmpwWobk?si=5nKEM2V6ne3twcOa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ]
        }
    ]

    const movieExplanation = [
        {
            'id': 3,
            'label': 'Movie Explanation',
            'videos': [
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/HyWhJ0NNhTk?si=-usPD_8eKGebThVK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/BXUoPrTo4m4?si=JLgrBmx4mnPJJ6iD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/hmSqTVOmDjM?si=LffNfgTQZWgKFzUs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ]
        }
    ]

    const lyricalVideos = [
        {
            'id': 4,
            'label': 'Lyrical Videos',
            'videos': [
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/woVZ75f3i50?si=h9pGmaoHd0oKk07v" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' src="https://www.youtube.com/embed/ItDLt6pBfvU?si=xszOV4wr7oT8tS81" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
                <iframe className='w-full h-[215px] md:h-[215px] my-2 rounded-md' width="560" height="315" src="https://www.youtube.com/embed/kBdLn2oUU5g?si=Z20HyunlLbREj6eK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ]
        }
    ]
    return (
        <div className='py-8' id='work'>
            <h2 className="text-[#FFD14C] font-bold text-2xl text-center">My work</h2>
            <div className="">
                {shortMovies.map((index) => (
                    <div className='pb-6' key={index.label  }>
                        <h3 className="font-medium text-xl pt-5">{index.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {index.videos}
                        </div>
                    </div>
                ))}

                {songs.map((index) => (
                    <div className='pb-6' key={index.label  }>
                        <h3 className="font-medium text-xl pt-5">{index.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {index.videos}
                        </div>
                    </div>
                ))}

                {movieExplanation.map((index) => (
                    <div className='pb-6' key={index.label  }>
                        <h3 className="font-medium text-xl pt-5">{index.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {index.videos}
                        </div>
                    </div>
                ))}
                
                {lyricalVideos.map((index) => (
                    <div className='pb-6' key={index.label  }>
                        <h3 className="font-medium text-xl pt-5">{index.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {index.videos}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Work
