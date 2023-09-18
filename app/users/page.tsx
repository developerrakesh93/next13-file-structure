import React from 'react'
import UserTable from './UserTable'

// Accessing query string parameters from the URL 
interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <div>
            page {sortOrder}
            <UserTable sortOrder={sortOrder}></UserTable>
        </div>
    )
}

export default UsersPage