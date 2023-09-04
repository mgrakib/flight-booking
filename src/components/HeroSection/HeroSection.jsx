/** @format */

import { BsFillCalendarCheckFill } from "react-icons/bs";
import Container from "../Container/Container";
import runningBus from '../../../public/running_bus.png'
import './HeroSection.css'
import Image from "next/image";
const HeroSection = () => {
	return (
		<div className='cityBannar  pt-8 pb-16 relative '>
			<Container>
				<div className='py-10 flex items-center'>
					<div className='w-[50%] flex flex-col gap-5 md:gap-10 items-start'>
						<h1 className='text-5xl font-bold md:leading-[52px]'>
							Get Your Ticket Online, Easy and Safely
						</h1>

						<button className='py-3 px-6 rounded bg-[#219051] text-white font-semibold'>
							GET TICKET NOW
						</button>
					</div>

					{/* from  */}
					<div className='w-[50%] flex flex-col items-start gap-5 md:gap-10'>
						<p className='text-3xl font-semibold'>
							Choose Your Ticket
						</p>

						<div className='w-[100%] '>
							<div className='py-10 px-5 bg-white shadow-[0_0_5px_rgba(0,0,0,.3)] flex flex-col gap-5'>
								<div className='grid grid-cols-12 gap-5'>
									<div className='col-span-6 '>
										<div className='flex items-center gap-2 relative'>
											<div className='trangle-shape bg-[#0E9E4D] w-[15px] h-[15px] absolute left-1'></div>

											<select
												name=''
												id=''
												className='w-full border border-[#0E9E4D] outline-none px-4 py-2 rounded'
											>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
											</select>
										</div>
									</div>
									<div className='col-span-6 '>
										<div className='flex items-center gap-2 relative'>
											<div className='trangle-shape bg-[#0E9E4D] w-[15px] h-[15px] absolute left-1'></div>

											<select
												name=''
												id=''
												className='w-full border border-[#0E9E4D] outline-none px-4 py-2 rounded'
											>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
												<option value='Pickup Point'>
													Pickup Point
												</option>
											</select>
										</div>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-12 '>
										<div className='flex items-center gap-2 relative'>
											<div className=' text-[#0E9E4D]  absolute left-1'>
												<BsFillCalendarCheckFill />
											</div>
											<input
												type='date'
												name=''
												id=''
												className='w-full border border-[#0E9E4D] outline-none px-6 py-2 rounded'
											/>
										</div>
									</div>
								</div>

								<div className='flex items-center justify-center'>
									<button className='py-2 w-[50%] mx-auto text-white bg-[#219051]'>
										Find Ticket
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<div className='absolute  bottom-0 -left-[200px] running-car-div'>
				<Image
					src={runningBus}
					width={200}
					height={200}
					alt='running bus image'
					className=''
				/>
			</div>
		</div>
	);
};

export default HeroSection;
