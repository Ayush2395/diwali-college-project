import React from 'react'
import { Link } from 'react-router-dom'

export default function Slides() {
    return (
        <div>
            This is photo Slides
            <button className='slides-btn'><Link to='/'>Welcome Again</Link></button>
        </div>
    )
}
