import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, CategoryScale, LinearScale, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, CategoryScale, LinearScale, Legend, ArcElement);

const DoughnutChart = (props) => {
	const { labels, graph_data } = props;

	const data = {
		labels: labels,
		datasets: [
			{
				data: graph_data,
				backgroundColor: ['#f1419e', '#4d2ad7', '#f2efff'], // Define colors for the pie slices
			},
		],
	};

	const options = {
		plugins: {
			title: {
				display: true,
				text: 'Budget Record',
			},
		},
		responsive: true,
	};

	return (
		<div className="min-h-[30vh]">
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default DoughnutChart;
