import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">My Music Site</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">AlbumList</Link>
                    </li>
                    <li>
                        <Link to="/mytop">MyTop</Link>
                    </li>
                    <li>
                        <Link className='btn' to="/add">Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header