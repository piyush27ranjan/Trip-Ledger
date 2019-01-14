import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <div className="brand-logo left">Trip Ledger</div>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to='/transaction'>Transactions</NavLink></li>
                    <li><NavLink to='/stats'>Stats</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar