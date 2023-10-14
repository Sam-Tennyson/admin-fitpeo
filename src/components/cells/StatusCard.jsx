// libs
import React from 'react'
import { IconButton } from '@material-tailwind/react'

// constants
import { STATUS_DATA } from '../../shared/Constants'

const StatusCard = () => {
    return (
        <>
            <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-3">
                {STATUS_DATA.map((item) => (
                    <div key={item?.id} className='bg-white p-4 rounded-md flex justify-start items-center'>
                        <div>
                            <IconButton className={`w-24 h-24 rounded-full max-w-[96px] max-h-[96px] ${item?.image_bg} shadow-none hover:shadow-none `}>
                                {item?.image_URL || null}            
                            </IconButton>
                        </div>
                        <div className='ml-3'>
                            <div className='text-xs text-gray-400 '>{item?.title}</div>
                            <div className='text-lg font-bold '>${item?.amount}k</div>
                            <div className='text-xs text-gray-400 '>{item?.percentage} this month</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatusCard