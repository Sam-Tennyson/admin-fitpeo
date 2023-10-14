// libs
import React from 'react'

// components
import SearchBar from '../components/atoms/SearchBar'
import StatusCard from '../components/cells/StatusCard'
import GraphRenderer from '../components/cells/GraphRenderer'
import ProductSell from '../components/cells/ProductSell'

const Dashboard = () => {
    return (
        <>
            <div className="flex justify-between mb-4 flex-wrap">
                <h2 className='custom-heading-class mb-2'>Hello Shahrukh👋,</h2>
                <SearchBar />
            </div>
            <section className='mb-4'>
                <StatusCard />
            </section>
            <section className='mb-4'>
                <GraphRenderer />
            </section>
            <section className='mb-4'>
                <ProductSell />
            </section>
        </>
    )
}

export default Dashboard