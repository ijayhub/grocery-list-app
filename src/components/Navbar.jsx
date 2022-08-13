import React from 'react'

const Navbar = () => {
	return (
		<>
			<div className='flex items-center justify-between container mx-auto home m-6 md:mb-40 login-container'>
				<a href='/'>
					<div className='bg-yellow-800 text-white rounded-lg shadow-md w-16 text-center p-2 text-2xl font-bold'>
						GCR
					</div>
				</a>
				<ul className='flex mx-2'>
					<a href='Login'>
						<li className= 'font-semibold hover:bg-yellow-800 rounded-full p-2'>
							Login
						</li>
					</a>
					<a href='Signup'>
						<li className='font-semibold hover:bg-yellow-800 rounded-full p-2 '>
							Register
						</li>
					</a>
					</ul>
				</div>
			
		</>
	);
}

export default Navbar
