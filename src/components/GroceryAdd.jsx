import React from 'react'
import trash from '../img/trash-2.svg'
import edit from '../img/edit.svg'

const GroceryAdd = ({ grocery, setList, handleDelete, setGrocery, handleEdit }) => {
	
	
  return (
		<div>
			{grocery.map((item) => (
				<div key={item.id}>
					<form>
						<div className='flex items-center justify-center mb-6'>
							<input
								type='text'
								className='p-2 rounded-md bg-blue-100 email'
								value={item.list}
								onChange={(e) => setList(e.target.value)}
							/>
						</div>
						<div className='img-add'>
							<img
								src={trash}
								alt='trash'
								className='img-add1 '
								onClick={() => handleDelete(item.id)}
							/>
						</div>
						<div className='imgAdd'>
							<img
								src={edit}
								alt='edit'
								className='img-add2 '
								onClick={() => handleEdit(item.id)}
							/>
						</div>
					</form>
				</div>
			))}
			<div className='flex items-center justify-center text-white bg-yellow-800 font-bold rounded-md p-1'>
				<button onClick={() => setGrocery([])}>Clear all Items</button>
			</div>
		</div>
	);
}

export default GroceryAdd
