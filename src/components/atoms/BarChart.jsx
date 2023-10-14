import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, LineElement, CategoryScale, LinearScale, Legend, Tooltip, Title, BarElement } from 'chart.js';

ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement)

const BarChart = (props) => {
	const { labels, graph_data } = props
	const data = {
		labels: [...labels],
		datasets: [
			{
				label: 'My Chart',
				data: [...graph_data],
				borderColor: '#4e0c08',
				backgroundColor: "#f2efff",
				borderRadius: 10,
				borderWidth: 0,
				hoverBackgroundColor: '#5a32ea'
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: false
			},
		},
		maintainAspectRatio: false, // Set this to false to make the chart responsive
		responsive: true, // Enable responsiveness
		scales: {
			x: {
				// X-axis options
				display: true,
				title: {
					display: false,
					text: 'X-Axis Label', // X-axis label text
				},
				grid: {
					display: false, // Hide y-axis grid lines
				},
			},
			y: {
				// Y-axis options
				display: false,
				title: {
					display: false,
					text: 'Y-Axis Label', // Y-axis label text
				},
				grid: {
					display: false, // Hide y-axis grid lines
				},
			},
		},
		tooltips: {
			enabled: false, // Show tooltips on hover
		},
	};
	return (
		<>
			<div className="min-h-[40vh]">
				<Bar data={data} options={options} />
			</div>
		</>
	)
}

export default BarChart