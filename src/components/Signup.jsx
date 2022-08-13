import React, {useState}  from 'react'


const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setPassword('')
    }
	return (
		<div className='container mx-auto '>
			<div className='bg-yellow-800 text-white rounded-lg shadow-md w-16 text-center text-2xl font-bold mt-11 mb-40 login-container'>
				<a href='/' className=''>
					<h1 className='p-2'>GCR</h1>
				</a>
			</div>
			<div className='flex items-center justify-center flex-col  shadow-lg mx-auto login-content border-t-4 border-yellow-900 rounded-lg'>
				<h2 className='bg-yellow-800 text-white rounded-lg shadow-md w-16 text-center p-2 md:text-2xl font-bold mb-4'>
					GCR
				</h2>
				<div>
					<h3 className='text-yellow-700 font-bold md:text-2xl'>Register</h3>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<label
							htmlFor='name'
							className='text-yellow-900 font-bold mb-6 login-label'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='bg-blue-100 email p-1 mb-6 mt-4'
							placeholder='Enter your full Names'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label
							htmlFor='email'
							className='text-yellow-900 font-bold mb-6 login-label'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='bg-blue-100 email p-1 my-2'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label
							htmlFor='password'
							className='text-yellow-900 font-bold mb-6 login-label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							className='bg-blue-100 email p-1 mb-6 mt-4'
							placeholder='Enter your password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							type='submit'
							className='bg-yellow-700 p-1 login-btn mb-4 text-white rounded-md font-bold'>
							<a href='Login'>Signup</a>
						</button>
						<div className='flex items-center justify-center md:text-xl'>
							<p>
								Already a member?{' '}
								<a href='Login' className='text-yellow-700'>
									Login
								</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup
