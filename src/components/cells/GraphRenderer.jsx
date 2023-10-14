// libs
import React from 'react'

// components
import BarChart from '../atoms/BarChart'
import DoughnutChart from '../atoms/DoughnutChart'

// constants
import { DROPDOWN_DATA, MONTH_ARRAY, PIE_CHART } from '../../shared/Constants'
import CustomSelect from '../atoms/CustomSelect'

const BarChartEarning = () => {
    return (<BarChart labels={[...(MONTH_ARRAY?.map(item => item?.label)) ?? []]} graph_data={[...(MONTH_ARRAY?.map(item => item?.value) ?? [])]} />)
}

const CustomerChart = () => {
    return (<DoughnutChart labels={[...(PIE_CHART?.map(item => item?.label) ?? [])]} graph_data={[...(PIE_CHART?.map(item => item?.value) ?? [])]} />)
}

const GraphRenderer = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-3">
                <div className='lg:col-start-1 lg:col-end-9 col-span-full p-4 rounded-md bg-white'>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className='custom-heading-class'>Overview</h2>
                            <div className='text-xs text-gray-400 '>Monthly earning</div>
                        </div>
                        <div>
                            <CustomSelect options={DROPDOWN_DATA} />
                        </div>
                    </div>
                    <BarChartEarning />
                </div>
                <div className='lg:col-start-9 lg:col-end-13 col-span-full p-4 rounded-md bg-white'>
                    <h2 className='custom-heading-class' >Customers</h2>
                    <div className='text-xs text-gray-400 '>Customers that buy products</div>
                    <CustomerChart />
                </div>
            </div>
        </>
    )
}

export default GraphRenderer