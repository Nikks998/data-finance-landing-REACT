
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-secondary">REACT.</h1>
            <ul className="md:flex hidden">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {
                    !nav
                        ? <AiOutlineMenu size={30} />
                        : <AiOutlineClose size={30} />
                }

            </div>
            <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500'}>
                <h1 className="w-full text-3xl font-bold text-secondary m-4">REACT.</h1>
                <ul className='uppercase p-4'>
                    <li className="p-4">Home</li>
                    <li className="p-4">Company</li>
                    <li className="p-4">Resources</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}
