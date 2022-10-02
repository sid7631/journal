import React from 'react'

const Footer = () => {
    return (
        <div className='bg text-main'>
            <div className='flex justify-center py-8 px-4'>
                <div className='tracking-widest prose dark:prose-invert'>
                &#169;2022 Journal, All rights reserved
                </div>
                <div className='tracking-widest prose dark:prose-invert ml-8'>
                    Made by Siddharth
                </div>
            </div>
        </div>
    )
}

export default Footer