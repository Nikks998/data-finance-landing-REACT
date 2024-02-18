import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className="w-full text-3xl font-bold text-secondary">REACT.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt quasi, inventore voluptatum unde cum tenetur vitae ducimus eum perferendis ipsa, sunt, quis illo commodi rem facilis eveniet! Similique, accusamus!
                </p>
                <div className='flex justify-between md:w-[75%] my-6 mx-auto lg:mx-0'>
                    <FaFacebook size={30} className='hover:text-secondary cursor-pointer'/>
                    <FaInstagram size={30} className='hover:text-secondary cursor-pointer'/>
                    <FaTwitter size={30} className='hover:text-secondary cursor-pointer'/>
                    <FaGithub size={30} className='hover:text-secondary cursor-pointer'/>
                    <FaDribbble size={30} className='hover:text-secondary cursor-pointer'/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
