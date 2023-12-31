/** @format */

"use client";
import React, { useContext, useEffect, useState } from "react";
import Container from "../Container/Container";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import "./NavBar.css";

const NavBar = () => {
	const { navDrowerIsOpen, setNavDrowerIsOpen } = useContext(AuthContext);
	const navItems = [
		{
			path: "/",
			title: "Home",
		},
		{
			path: "/about",
			title: "About",
		},
		{
			path: "/faqs",
			title: "FAQs",
		},
		{
			path: "/blogs",
			title: "Blog",
		},
		{
			path: "/contact",
			title: "Contact",
		},
	];
	
	useEffect(() => {
		const handleScroll = () => {
			const header = document.getElementById("header");
			header.classList.toggle("stickyNavbar", window.scrollY > 120);
		};

		// Attach the event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); 

	console.log(navDrowerIsOpen);
	
	return (
		<div
			id='header'
			className=' w-full z-50 bg-white border-b border-gray-200 py-2  duration-700'
		>
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
						className='z-[9999]  flex flex-col gap-[2px] relative md:hidden'
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
			<div
				className={`min-w-[75%] h-[100vh] bg-yellow-500 duration-500 absolute top-0 z-[999] ${
					navDrowerIsOpen ? "right-0" : "-right-[100%]"
				}`}
			></div>
			<div
				className={`absolute w-full h-[100vh] z-[998] ${
					navDrowerIsOpen ? "scale-x-100" : "scale-x-0"
				} bg-[#000000a1] top-0 left-0  duration-500 origin-right`}
			></div>
		</div>
	);
};

export default NavBar;
