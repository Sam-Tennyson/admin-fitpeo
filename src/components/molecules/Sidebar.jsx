// libs
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '@material-tailwind/react'

// constants
import { DASHBOARD_OPTIONS } from '../../shared/Constants'
import { IMAGES } from '../../shared/Images'

const Sidebar = (props) => {
    const { closeMenu } = props
    const navigate = useNavigate();
    const handleSideClick = (data) => {
        navigate(data?.path)
        closeMenu()
    }

    return (
        <>
            <div className='relative'>
                <div className='flex items-center text-white text-lg mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> <span className='ml-2'>Dashboard</span>
                </div>
                <div className="absolute top-0 right-0 p-1 lg:hidden text-white cursor-pointer" onClick={closeMenu}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <aside className='flex flex-col text-xs'>
                    {DASHBOARD_OPTIONS.map((item) => (
                        <div className='cursor-pointer flex items-center justify-between text-light-blue p-3 hover:rounded-md hover:bg-lighter-blue hover:text-white' key={item?.id}
                            onClick={() => handleSideClick(item)}
                        >
                            <Link className='flex items-center'>
                                {item?.icon}
                                <span className='ml-2'>{item?.value}</span>
                            </Link>
                            <em>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </em>
                        </div>
                    ))}
                </aside>
                <div className='fixed bottom-10 left-0  lg:w-full lg-block  w-64 p-2 '>
                    <div className='flex items-center justify-between bottom-0 p-2 bg-lighter-blue rounded-md text-white mb-2 '>
                        <div className="flex items-center justify-start gap-1">
                            <Avatar src={IMAGES.avatarImage} alt="avatar" size='xs' />
                            <div className='flex flex-col text-sm'>
                                <span>Evano</span>
                                <span>Project Manager</span>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar