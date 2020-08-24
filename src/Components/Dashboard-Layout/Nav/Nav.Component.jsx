import React from 'react'

import { Link } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <Link to='/'>Main Menu</Link>
                </li>
                <li className="side-nav__item">
                    <Link to='/flexure-shear-design/'>Flexure / Shear Design</Link>
                </li>
                <li className="side-nav__item">
                    <Link to='/compression-design/'>Compression Member Design</Link>
                </li>
                <li className="side-nav__item">
                    <Link to='/tension-design/'>Tension Member Design</Link>
                </li>
                <li className="side-nav__item">
                    <Link to='/combined-axial-bending/'>Combined Axial & Bending</Link>
                </li>
                <li className="side-nav__item">
                    <Link to='/connection-design/'>Connections</Link>
                </li>
            </ul>
        </nav>
    )
}

export default DashboardNav
