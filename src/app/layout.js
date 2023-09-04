import CookiesNotice from '@/components/CookiesNotice/CookiesNotice'
import './globals.css'
import { Inter } from 'next/font/google'
import TopNavBar from '@/components/NavBar/TopNavBar'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Bus | Home',
  description: 'E-bus ticket system Home page',
}

export default function RootLayout({ children }) {
  return (
		<html lang='en'>
			<body className='bg-[#FEFEFE] min-h-[100vh] relative overflow-x-hidden'>
				<div className=''>
					{/* top nav bar  */}
					<div>
						<div className='hidden md:block border-b border-gray-200'>
							<TopNavBar />
						</div>
							<NavBar />
					</div>

					{/* children  */}
					<div>{children}</div>

					{/* cookis  */}
				  <div className='absolute left-0 bottom-0 shadow-[-1px_-1px_4px_2px_rgba(0,0,0,.3)] mt-auto'>
					  {/* <CookiesNotice /> */}
					</div>
				</div>
			</body>
		</html>
  );
}
