import React from 'react'
import '../../sass/navbar.scss'

function Navbar() {
    return (
        <div className='navbar-1'>
            <div className='navbar-componet navbar-2'>
                <ul className="nav-select">
                    <select class="custom-select selector">
                        <option selected>Select Modle</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </ul>
            </div>
        </div>

    )
}

export default Navbar