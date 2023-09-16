import React from 'react'

interface imageObject {
    id: number,
    title: string,
    url: string
}
const TimelinePage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-store' });
    const images: imageObject[] = await res.json();
    return (
        <div>
            <p>{new Date().toLocaleTimeString()}</p>
            <br />
            <table className='table table-bordered'>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                </thead>
                <tbody>{images.map((imageObject) =>
                    <tr key={imageObject.id}>
                        <td>{imageObject.id}</td>
                        <td>{imageObject.title}</td>
                    </tr>
                )}
                </tbody>
            </table>

        </ div>
    )
}

export default TimelinePage;