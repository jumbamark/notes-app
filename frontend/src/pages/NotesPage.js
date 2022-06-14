import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/chevron-left.svg'

const NotesPage = () => {
    let {id} = useParams();
    let [note,setNote] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        getNote()
    },[id])

    // calling the db
    const getNote =  async () => {
        const response = await fetch(`/api/notes/${id}/`);
        const data = await response.json();
        setNote(data);
    }

    const updateNote = async () => {
        fetch(`/api/notes/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const handleSubmit = () => {
        updateNote();
        navigate('/');
    }

    const deleteNote = async () => {
        fetch('/api/notes/' + id + '/delete/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        navigate('/');
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    {/* <Link to="/"> */}
                        <ArrowLeft onClick={handleSubmit}/>
                    {/* </Link> */}
                </h3>
                <button onClick={deleteNote}>Delete</button>
            </div>
            <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
        </div>
    );
}

export default NotesPage