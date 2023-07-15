import React from 'react'
import '../../sass/navbar.scss'

function Navbar() {
    return (
        <div className='navbar-1'>
            <div className='navbar-componet navbar-2'>
                <ul className="nav justify-content-center nav-select">
                    {/* <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
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