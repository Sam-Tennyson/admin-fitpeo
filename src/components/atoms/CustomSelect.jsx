import { Option, Select } from '@material-tailwind/react'
import React from 'react'

const CustomSelect = (props) => {
    const {options, disabled=false} = props
    return (
        <>
            <div className="ml-2 w-48">
                <Select label="Select " disable={disabled} className=' border-none'>
                    {options?.map((item) => (
                        <Option className='border-none' onClick={({target: {textContent}}) => console.log(textContent)}>{item?.value}</Option>
                    ))}
                    {/* <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option> */}
                </Select>
            </div>
        </>
    )
}

export default CustomSelect