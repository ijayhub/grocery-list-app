import React from 'react'
import cover from '../img/cover.jpg'
import Navbar from './Navbar';


const Home = () => {
    return (
      <>
        <Navbar/>
				<div className='grid md:grid-cols-2 container mx-auto home home-container login-container'>
					<div>
						<h1 className='md:text-6xl font-extrabold md:mb-7 text-yellow-900 home-header'>
							GROCERY LIST APP
						</h1>
						<p className='tracking-widest leading-7 text-yellow-900 font-mono md:mb-7 text-justify'>
							Uniquely extend cross-unit alignments vis-a-vis bleeding-edge
							testing procedures. Energistically redefine stand-alone content
							rather than enterprise convergence. Conveniently maximize
							economically sound imperatives with 24/7 users. Uniquely extend
							cross-unit alignments vis-a-vis bleeding-edge testing procedures.
							Energistically redefine stand-alone content rather than enterprise
						</p>
						<div className='home-home'>
							<a href='Login'>
								<button className='bg-yellow-900 text-white p-4 font-bold rounded-lg  '>
									Get Started
								</button>
							</a>
						</div>
					</div>
					<div className='mx-6'>
						<img
							src={cover}
							alt='grocery'
							className='rounded-lg img'
							style={{ width: '100%', height: '450px' }}
						/>
					</div>
				</div>
			</>
		);
}

export default Home
