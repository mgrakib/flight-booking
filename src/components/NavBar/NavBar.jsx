import React from 'react';
import Container from '../Container/Container';
import logo from '../../../public/logo.png'
import Image from 'next/image';

const NavBar = () => {
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

					<div className='flex items-center text-gray-500'>
						{navItems.map(item => (
							<li
								className='list-none py-1 px-4 border cursor-pointer'
								key={item.path}
							>
								{item.title}
							</li>
						))}
					</div>

					<div>
						<button className='py-2 px-4 bg-[#0E9E4D]  text-white rounded'>
							BUY TICKETS
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;