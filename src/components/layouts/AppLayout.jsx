// libs
import React, { useEffect, useState } from 'react'

// components
import Sidebar from '../molecules/Sidebar'
import MenuButton from '../atoms/MenuButton'

// constants
import { STRINGS } from '../../shared/Constants'

const AppLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the sidebar state
    const toggleSidebar = () => {
        // debugger;
        setSidebarOpen(!sidebarOpen);
    };

    // Function to close the sidebar when the screen size changes to medium
    const closeSidebarOnMd = () => {
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        }
    };

    // Add a listener to handle the screen size change
    useEffect(() => {
        window.addEventListener('resize', closeSidebarOnMd);
        return () => {
            window.removeEventListener('resize', closeSidebarOnMd);
        };
    }, []);

    console.log(sidebarOpen);
    return (
        <>
            <div className=" md:h-screen">
                <div className={`fixed left-0 bottom-0 top-0 lg:w-1/5 bg-primary-blue p-2 lg:block w-64 z-20
                    ${sidebarOpen ? 'translate-x-0' : 'lg:translate-x-0 -translate-x-full '} transition-transform duration-300 ease-in-out
                `}>
                    <Sidebar closeMenu={() => setSidebarOpen(false)} />
                </div>
                <div className='lg:ms-[20%] lg:hidden block p-6 bg-main-body-content '>
                    <div className='lg:hidden flex items-center justify-between '>
                        <div className='text-2xl font-medium'>{STRINGS.ADMIN_PANEL}</div>
                        <MenuButton onClick={toggleSidebar} />
                    </div>
                </div>
                <div className='lg:ms-[20%] lg:p-6 px-6 bg-main-body-content'>
                    {children}
                </div>
            </div>
            {sidebarOpen ? (
                <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-10"></div>
            ) : null}
        </>
    )
}

export default AppLayout