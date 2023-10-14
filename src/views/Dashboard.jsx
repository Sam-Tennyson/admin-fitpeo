import React from 'react'
import SearchBar from '../components/atoms/SearchBar'
import StatusCard from '../components/cells/StatusCard'

const Dashboard = () => {
    return (
        <>
            <div className="flex justify-between mb-4">
                <h2>Hello Shahrukh👋,</h2>
                <SearchBar />
            </div>
            <StatusCard />
        </>
    )
}

export default Dashboard