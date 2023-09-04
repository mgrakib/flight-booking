import Container from "../Container/Container";
import logo from '../../../public/logo.png'
import Image from "next/image";
import { AiOutlineDoubleRight } from "react-icons/ai";
import mastarCard from '../../../public/mastar.svg'
import visaCard from "../../../public/visa.svg";
import bikash from "../../../public/bikash.svg";
import tap from "../../../public/tap.svg";
import nogod from "../../../public/nogod.svg";
import upay from "../../../public/upay.svg";
import union from "../../../public/union.svg";

const Footer = () => {
    return (
		<div className='bg-[#1E2A3F] py-10'>
			<Container>
				<div className='py-10 text-white flex gap-20'>
					<div className='w-[100%] flex gap-10'>
						{/* Menu  */}
						<div className='w-[10%]'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Menu
							</p>

							<div className='mt-4'>
								<ul className='flex flex-col gap-3'>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										About
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										FAQs
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Blog
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Contact
									</li>
								</ul>
							</div>
						</div>
						{/* Policy */}
						<div className='w-[16%]'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Policies
							</p>
							<div className='mt-4'>
								<ul className='flex flex-col gap-3'>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Privacy Policy
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Terms and Conditions
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Ticket Policies
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Refund Policy
									</li>
								</ul>
							</div>
						</div>
						{/* Company */}
						<div className='w-[10%]'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Company
							</p>
							<div className='mt-4'>
								<ul className='flex flex-col gap-3'>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Support
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Partners
									</li>
									<li className='flex items-center gap-2 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Jobs
									</li>
								</ul>
							</div>
						</div>
						{/* Need Help ? */}
						<div className='w-[24%]'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Need Help ?
							</p>
							<div className='mt-4'>
								<p>
									We are Always here for you! Knock us on
									Messenger anytime or Call our Hotline (10AM
									- 10PM).
								</p>
							</div>
						</div>
						{/* Payment Methods */}
						<div className='w-[20%] '>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Payment Methods
							</p>
							<div className='mt-4'>
								<div className='flex items-center gap-2 flex-wrap'>
									<div className=''>
										<Image
											src={mastarCard}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<Image
											src={visaCard}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<Image
											src={bikash}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<Image
											src={nogod}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<Image
											src={tap}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<Image
											src={upay}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<Image
											src={union}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-5  border-t border-gray-200'>
					<div className='flex items-center justify-between'>
						<div>
							<Image
								src={logo}
								width={150}
								height={150}
								alt='logo'
							/>
						</div>

						<div>
							<p className="text-white">© Copyright E-Bus Ltd.</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;