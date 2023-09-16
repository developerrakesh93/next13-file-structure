'use client'
import React from 'react'

const AppButton = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => console.log('click')}>Add to cart</button>
        </div>
    )
}

export default AppButton