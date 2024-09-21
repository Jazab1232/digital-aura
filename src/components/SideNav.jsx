import React from 'react'
import '../styles/sideNav.css'
import { Link } from 'react-router-dom'

export default function SideNav({ showNav, setShowNav }) {
    return (
        <div className='sideNav' style={{ display: showNav ? 'block' : 'none' }}>
            <div className="sideNavLinks">
                <Link to='/' className='sideNavLink'>Home</Link>
                <Link to={`/categoryPage?category=${'programming'}`} className='sideNavLink'>Programming</Link>
                <Link to={`/categoryPage?category=${'gadgets'}`} className='sideNavLink'>Gadgets </Link>
                <Link to={`/categoryPage?category=${'trends'}`} className='sideNavLink'>Trends</Link>
                <Link to={`/categoryPage?category=${'techNews'}`} className='sideNavLink'>Tech News</Link>
            </div>
        </div>
    )
}
