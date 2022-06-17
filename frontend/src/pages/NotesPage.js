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
        if (id === "create") return
        const response = await fetch(`/api/notes/${id}/`);
        const data = await response.json();
        setNote(data);
    }

    const updateNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const handleSubmit = () => {
        if (id !== "create" && !note.body ) {
            deleteNote()
        } else if (id !== "create") {
            updateNote();
        } else if (id === 'create' && note.body !== null) {
            createNote();
        }
        navigate('/');
    }

    const deleteNote = async () => {
        fetch('/api/notes/' + id + '/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        navigate('/');
    }

    const createNote = () => {
        fetch('/api/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })
        // navigate('/');
    }

    const handleChange = (value) => {
        // console.log("Mark");
        setNote(
            note => ({
                ...note,
                'body' : value
            }),
            // 'body' : value,
        )
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    {/* <Link to="/"> */}
                        <ArrowLeft onClick={handleSubmit}/>
                    {/* </Link> */}
                </h3> 
                {/* if note id is not equal to create then add in the delete buttton, if create prompt user to hit done */}
                {id !== 'create' ? (
                    <button onClick={deleteNote}>Delete</button>
                ): (
                    <button onClick={handleSubmit}>Done</button>
                )}
        
            </div>
            <textarea onChange={(e) => {handleChange(e.target.value)}} value={note?.body}></textarea>
        </div>
    );
}

export default NotesPage