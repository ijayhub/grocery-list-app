import React,{ useState } from 'react'
import GroceryAdd from './GroceryAdd';
import useLocalStorage from '../hook/useLocalStorage';

const CreatingGrocery = () => {
    const [grocery, setGrocery] = useLocalStorage('grocery',[]);
	const [list, setList] = useState('');
	const [isEditing, setIsEditing] = useState(false)
	const [editID, setEditID] = useState(null)



	
	const handleSubmit = (e) => {
		e.preventDefault();
        if (list&&isEditing) {
			// deal with edit
			setGrocery(grocery.map((item) => {
				if (item.id === editID) {
					return{...item,list}
				}
				return item
			})
			)
			setList('')
			setEditID(null)
			setIsEditing(false)
		} else {
			// show newadd items 
			const newGrocery = { id: new Date().getTime().toString(), list };
			console.log(newGrocery);
			setGrocery((grocery) => {
				return [...grocery, newGrocery];
			});
			setList('');
		}
	}
	// creating the  function for delete
	const handleDelete = (id) => {
		const groceryDelete = grocery.filter((item) => item.id !== id)
		setGrocery(groceryDelete)
	}
	// creating edit function
	const handleEdit = (id) => {
		const editGrocery = grocery.find((item) => item.id === id);
		setIsEditing(true)
		setEditID(id)
		setList(editGrocery.list)
	};  
	return (
			<>
				<section className='body '>
					<div className='container mx-auto '>
						<div className='flex items-center justify-between mx-2 '>
							<div className='mt-11'>
								<h1 className=' bg-yellow-800 text-white w-14 p-2 rounded-lg shadow-md text-center font-bold nav-icon'>
									GCR
								</h1>
							</div>
							<div className='mt-11'>
								<a href='/'>
									<button className=' p-2 rounded-lg shadow-lg btn-logout bg-yellow-800 text-white font-bold'>
										Logout
									</button>
								</a>
							</div>
						</div>
						<form
							onSubmit={handleSubmit}
							className='container mx-auto grocery-container'>
							<div className='shadow-lg mt-38 p-12'>
								<h2 className='font-extrabold text-yellow-800 text-center tracking-wide mb-11 md:text-4xl'>
									Grocery List App
								</h2>
								<div className='flex items-center justify-center mb-9'>
									<input
										type='text'
										placeholder='e.g bread' maxlength="20"
										className='md:p-2 grocery-input bg-blue-100 rounded-md'
										value={list}
										onChange={(e) => setList(e.target.value)}
									/>
									
										<button
											type='submit'
											className='bg-yellow-900 text-white md:p-2 rounded-r-md grocery-btn font-bold'>
											{isEditing ? ('Edit') : ('SUBMIT')}
										</button>
									
								</div>
								<GroceryAdd
									grocery={grocery}
									setGrocery={setGrocery}
									handleDelete={handleDelete}
									handleEdit={handleEdit}
								/>
							</div>
						</form>
					</div>
				</section>
			</>
		);
}

export default CreatingGrocery
