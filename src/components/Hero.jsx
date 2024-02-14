import { Typewriter } from 'react-simple-typewriter'

export const Hero = () => {

    return (
        <div>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-secondary font-bold p-2 md:text-2xl sm:text-lg">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:pt-2">Grow with data.</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">
                        Fast, flexible financing for <span className="md:text-5xl sm:text-4xl text-xl font-bold opacity-60">
                            <Typewriter
                                words={['BTB', 'BTC', 'SASS']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={80}
                                deleteSpeed={70}
                            />
                        </span>
                    </p>
                </div>
                <p className='md:text-2xl sm:text-xl text-lg font-bold text-gray-500'>
                    Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
                </p>
                <button className="bg-secondary w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-primary hover:scale-105 duration-300">
                    Get Started
                </button>
            </div>
        </div>
    )
}
