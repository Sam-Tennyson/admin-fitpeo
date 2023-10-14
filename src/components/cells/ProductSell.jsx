import React from 'react'
import SearchBar from '../atoms/SearchBar'
import CustomTable from '../atoms/CustomTable'
import { Avatar, Typography } from '@material-tailwind/react'
import { DROPDOWN_DATA } from '../../shared/Constants'
import CustomSelect from '../atoms/CustomSelect'

const ProductColumn = ({ row, value }) => (
	<div key={row?.id} className="flex items-center gap-3">
		<Avatar src={row?.img} alt={row?.name} size="sm" />
		<div className="flex flex-col">
			<Typography
				variant="small"
				color="blue-gray"
				className="font-normal"
			>
				{row?.name}
			</Typography>
			<Typography
				variant="small"
				color="blue-gray"
				className="font-normal opacity-70"
			>
				{row?.desc}
			</Typography>
		</div>
	</div>
)

const ProductSell = () => {

	const TABLE_HEAD = [
		{
			id: "name",
			label: "Product Name",
			format: (value, row) => <ProductColumn row={row} value={value} />
		},
		{
			id: "stock",
			label: "Stock",
			format: (value) => <span className='text-gray-800 text-sm'>{value}</span>
		},
		{
			id: "price",
			label: "Price",
			format: (value) => <span className='text-gray-800 font-semibold'>{value}</span>
		},
		{
			id: "totalSales",
			label: "Total Sales",
			format: (value) => <span className='text-gray-800 text-sm'>{value}</span>
		},
	];

	const TABLE_ROWS = [
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
			name: "John Michael",
			desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			totalSales: 20,
			org: "Organization",
			price: "$ 45.99",
			stock: "32 in stock"
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
			name: "Alexa Liras",
			desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			totalSales: 20,
			org: "Developer",
			price: "$ 45.99",
			stock: "32 in stock"
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
			name: "Laurent Perrier",
			desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			totalSales: 20,
			org: "Projects",
			price: "$ 45.99",
			stock: "32 in stock"
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
			name: "Michael Levi",
			desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			totalSales: 20,
			org: "Developer",
			price: "$ 45.99",
			stock: "32 in stock"
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
			name: "Richard Gran",
			desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			totalSales: 20,
			org: "Executive",
			price: "$ 45.99",
			stock: "32 in stock"
		},
	];

	return (
		<>
			<div className='p-4 bg-white rounded-md' >
				<div className="flex justify-between items-center flex-wrap">
					<h2 className='custom-heading-class mb-2'>Product Sell</h2>
					<div className='flex flex-wrap mb-2'>

					<SearchBar />
					<CustomSelect options={DROPDOWN_DATA} />
					</div>
				</div>
				<div>
					<CustomTable
						columns={TABLE_HEAD}
						rows={TABLE_ROWS}
					/>
				</div>
			</div>
		</>
	)
}

export default ProductSell