'use client'
import React, { useState } from 'react';
import Container from '../Container/Container';
import logo from '../../../public/logo.png'
import Image from 'next/image';

const NavBar = () => {
	const [navDrowerIsOpen, setNavDrowerIsOpen]= useState(false)
    const navItems = [
        {
            path: '/',
            title: "Home"
            
        },
        {
            path: '/about',
            title: "About"
            
        },
        {
            path: '/faqs',
            title: "FAQs"
            
        },
        {
            path: '/blogs',
            title: "Blog"
            
        },
        {
            path: '/contact',
            title: "Contact"
            
        },
	]
	
	console.log(navDrowerIsOpen)
    return (
		<div>
			<Container>
				<div className='flex items-center justify-between'>
					<div className='w-[120px]'>
						<Image
							src={logo}
							width={120}
							height={120}
							alt='Picture of the author'
						/>
					</div>

					<div className='hidden md:flex items-center text-gray-500'>
						{navItems.map(item => (
							<li
								className='list-none py-1 px-4 border cursor-pointer'
								key={item.path}
							>
								{item.title}
							</li>
						))}
					</div>

					<div className='hidden md:block'>
						<button className='py-1 px-3 md:py-2 md:px-4 bg-[#0E9E4D]  text-white rounded'>
							BUY TICKETS
						</button>
					</div>

					<div
						onClick={() => setNavDrowerIsOpen(!navDrowerIsOpen)}
						className='  flex flex-col gap-[2px] relative md:hidden'
					>
						<div
							className={`w-[15px] h-[2px] ${
								navDrowerIsOpen && "rotate-45 "
							} bg-black origin-center duration-300`}
						></div>
						<div
							className={` w-[15px] h-[2px] ${
								navDrowerIsOpen && "opacity-0"
							} duration-400 bg-black`}
						></div>
						<div
							className={`w-[15px] h-[2px] ${
								navDrowerIsOpen && "-rotate-45 absolute"
							} bg-black origin-center duration-300`}
						></div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;