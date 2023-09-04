/** @format */
"use client"

import Container from "../Container/Container";
import { BsTelephone } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const TopNavBar = () => {
	return (
		<div className=' text-[13px] py-2'>
			<Container>
				<div className='flex justify-between items-center'>
					{/* contact  */}
					<div className='flex items-center gap-5 text-gray-500'>
						<div className='flex items-center gap-2 '>
							{" "}
							<BsTelephone className='text-[#0E9E4D] ' /> +44
							45678908
						</div>
						<div className='flex items-center gap-2 '>
							<LuMailOpen className='text-[#0E9E4D] ' />{" "}
							example@gmail.com
						</div>
					</div>

					{/* sing up  */}
					<div className='flex items-center gap-5'>
						<div className='flex items-center gap-5 border border-gray-200 px-2 py-1'>
							<div className='flex items-center gap-1 '>
								<IoLogIn className='text-[#0E9E4D] text-xl ' />{" "}
								Sing In
							</div>

							<div className='flex items-center gap-1 '>
								<FaUserPlus className='text-[#0E9E4D] text-xl ' />{" "}
								Sing Up
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default TopNavBar;
