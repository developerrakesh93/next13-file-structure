import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}
interface Props {
    sortOrder: string
}
const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users: User[] = await res.json();
    const sortedUsers = sort(users).asc(sortOrder === 'id' ? users => users.id : sortOrder === 'email' ? users => users.email : users => users.name);

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th><Link href={'/users?sortOrder=id'}>Id</Link></th>
                    <th><Link href={'/users?sortOrder=name'}>Name</Link></th>
                    <th><Link href={'/users?sortOrder=email'}>Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((userObject) => <tr key={userObject.id}>
                    <td>{userObject.id}</td>
                    <td>{userObject.name}</td>
                    <td>{userObject.email}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserTable