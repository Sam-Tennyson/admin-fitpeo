import React from 'react'
import SearchBar from '../atoms/SearchBar'
import CustomTable from '../atoms/CustomTable'

const ProductSell = () => {
	return (
		<>
			<div className='p-4 bg-white rounded-md' >
				<div className="flex justify-between items-center">
					<h2 className='custom-heading-class'>Product Sell</h2>
					<SearchBar />
				</div>
				<div>
					<CustomTable />
				</div>
			</div>
		</>
	)
}

export default ProductSell