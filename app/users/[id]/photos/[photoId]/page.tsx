import React from 'react'
import { identifierToKeywordKind } from 'typescript';

interface Props {
    params: { id: number, photoId: number }
};

const PhotoId = ({ params: { id, photoId } }: Props) => {
    return (
        <div>Photo Id {id} {photoId} </div>
    )
}

export default PhotoId;