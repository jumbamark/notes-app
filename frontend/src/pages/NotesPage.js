import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/chevron-left.svg'
import {Link} from "react-router-dom";

const NotesPage = () => {
    let {id} = useParams()
    let [note,setNote] = useState(null)

    useEffect(() => {
        getNote()
    },[id])

    // calling the db
    const getNote =  async () => {
        const response = await fetch(`/api/notes/${id}/`)
        const data = await response.json()
        setNote(data)
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea defaultValue={note?.body}></textarea>
        </div>
    );
}

export default NotesPage