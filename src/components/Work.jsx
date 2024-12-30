import React from 'react'

const Work = () => {
    const shortMovies = [
        {
            'label': 'Short Movies',
            'videos': [
                {
                    'image': './videos/thenightway.jpg',
                    'src': "https://www.youtube.com/embed/zdgTATu4YVY?si=hAbfinraTfC8B9XQ"
                }, {
                    'image': './videos/devrani.jpg',
                    'src': "https://www.youtube.com/embed/pUaEQbURmE8?si=qIaAMln6YFF5Cj13"
                },
                {
                    'image': './videos/saas.jpg',
                    'src': "https://www.youtube.com/embed/Khqik-3ICRM?si=pgc95TQeYROPF23x"
                }
            ]
        }
    ]

    const songs = [
        {
            'label': 'Songs',
            'videos': [
                {
                    'image': './videos/deadlife.jpg',
                    'src': "https://www.youtube.com/watch?v=Id3ZHDwyTc4"
                }, {
                    'image': './videos/bholenath.jpg',
                    'src': "https://www.youtube.com/watch?v=CgJDMBUfpvI"
                },
                {
                    'image': './videos/jouji.jpg',
                    'src': "https://www.youtube.com/watch?v=wBAmmpwWobk&t=2s"
                }
            ]
        }
    ]

    const movieExplanation = [
        {
            'label': 'Movie Explanation',
            'videos': [
                {
                    'image': './videos/billion.jpg',
                    'src': "https://www.youtube.com/watch?v=HyWhJ0NNhTk"
                }, {
                    'image': './videos/fat.jpg',
                    'src': "https://www.youtube.com/watch?v=BXUoPrTo4m4"
                },
                {
                    'image': './videos/oxygen.jpg',
                    'src': "https://www.youtube.com/watch?v=hmSqTVOmDjM"
                }
            ]
        }
    ]

    const lyricalVideos = [
        {
            'label': 'Lyrical Videos',
            'videos': [
                {
                    'image': './videos/mata.jpg',
                    'src': "https://www.youtube.com/watch?v=woVZ75f3i50"
                }, {
                    'image': './videos/krishan.jpg',
                    'src': "https://www.youtube.com/watch?v=ItDLt6pBfvU"
                },
                {
                    'image': './videos/dil.jpg',
                    'src': "https://www.youtube.com/watch?v=kBdLn2oUU5g"
                }
            ]
        }
    ]
    return (
        <div className='py-8' id='work'>
            <h2 className="text-[#FFD14C] font-bold text-2xl text-center">My work</h2>
            <div className="">
                {shortMovies.map((movie) => (
                    <div className='pb-6' key={movie.label}>
                        <h3 className="font-medium text-xl pt-5">{movie.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {movie.videos.map((video, index) => (
                                <a key={index} href={video.src} rel="noopener noreferrer">
                                    <img src={video.image} className='rounded-lg' alt={`Video thumbnail ${index + 1}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}


                {songs.map((song) => (
                    <div className='pb-6' key={song.label}>
                        <h3 className="font-medium text-xl pt-5">{song.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {song.videos.map((video, index) => (
                                <a key={index} href={video.src} rel="noopener noreferrer">
                                    <img src={video.image} className='rounded-lg' alt={`Video thumbnail ${index + 1}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                {movieExplanation.map((movie) => (
                    <div className='pb-6' key={movie.label}>
                        <h3 className="font-medium text-xl pt-5">{movie.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {movie.videos.map((video, index) => (
                                <a key={index} href={video.src} rel="noopener noreferrer">
                                    <img src={video.image} className='rounded-lg' alt={`Video thumbnail ${index + 1}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                {lyricalVideos.map((videos) => (
                    <div className='pb-6' key={videos.label}>
                        <h3 className="font-medium text-xl pt-5">{videos.label}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {videos.videos.map((video, index) => (
                                <a key={index} href={video.src} rel="noopener noreferrer">
                                    <img src={video.image} className='rounded-lg' alt={`Video thumbnail ${index + 1}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Work
