import React from 'react'

const GraphRenderer = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-3">
                <div className='lg:col-start-1 lg:col-end-9 col-span-full p-4 rounded-md bg-white'>
                    <h2 className='custom-heading-class'>Overview</h2>
                    <div className='text-xs text-gray-400 '>Monthly earning</div>
                </div>
                <div className='lg:col-start-9 lg:col-end-13 col-span-full p-4 rounded-md bg-white'>
                    <h2 className='custom-heading-class' >Customers</h2>
                    <div className='text-xs text-gray-400 '>Customers that buy products</div>
                </div>
            </div>
        </>
    ) 
}

export default GraphRenderer