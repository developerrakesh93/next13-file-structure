'use client'
import React from 'react'

interface Props {
    error: Error
}
const error = ({ error }: Props) => {
    console.log('Printing Error', error)
    return (
        <div> An uneexpected error occured</div>
    )
}

export default error