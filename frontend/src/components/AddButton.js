import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as AddIcon} from '../assets/add.svg'


const AddButton = () => {
  return (
    <Link to="/note/create/" className="floating-button">
        <AddIcon/>
    </Link>
  )
}

export default AddButton