// libs
import React from 'react'

// components
import Sidebar from '../molecules/Sidebar'
import MenuButton from '../atoms/MenuButton'

// constants
import { STRINGS } from '../../shared/Constants'

const AppLayout = ({ children }) => {
    return (
        <>
            <div className="grid grid-cols-12 md:h-screen">
                <div className=' relative hidden lg:col-start-1 lg:col-end-3 md:block col-start-1 col-end-4 bg-primary-blue p-2'>
                    <Sidebar />
                </div>
                <div className='md:hidden col-span-full'>
                    <div className='flex items-center justify-between'>
                        <div>{STRINGS.ADMIN_PANEL}</div>
                        <MenuButton />
                    </div>
                </div>
                <div className=' lg:col-start-3 lg:col-end-13 md:col-start-4 md:col-end-13 col-span-full p-6 bg-main-body-content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AppLayout