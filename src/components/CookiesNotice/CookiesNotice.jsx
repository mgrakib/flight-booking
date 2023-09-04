/** @format */

import { FaCookieBite } from "react-icons/fa";
const CookiesNotice = () => {
	return (
		<div className='w-full py-10'>
			<div className='px-5 md:px-16 text-center min-h-[50%]  mx-auto'>
				<div className='text-2xl text-[#A0D8B7] flex items-center justify-center mb-5'>
					<FaCookieBite />
				</div>
				<p>
					We may use cookies or any other tracking technologies when
					you visit our website, including any other media form,
					mobile website, or mobile application related or connected
					to help customize the Site and improve your experience.
				</p>
				<button className='text-gray-400'>learn more</button>

				<div>
					<button className='py-2 px-8 rounded-full border border-gray-500  mt-5 hover:bg-[#B6E1C6] hover:text-white hover:border-[#98e1b3] duration-200'>
						Allow
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookiesNotice;
