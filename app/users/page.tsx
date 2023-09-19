import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

// Accessing query string parameters from the URL 
interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <div>
            <Link href='/users/new' className='btn'>New User</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={sortOrder}></UserTable>
            </Suspense>
        </div>
    )
}

export default UsersPage