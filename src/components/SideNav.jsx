import React from 'react'
import '../styles/sideNav.css'
import { Link } from 'react-router-dom'

export default function SideNav({ showNav, setShowNav }) {
    return (
        <div className='sideNav' style={{ display: showNav ? 'block' : 'none' }}>
            <div className="sideNavLinks">
                <Link to='/' className='sideNavLink' onClick={() => { setShowNav(false) }}>Home</Link>
                <Link to={`/categoryPage?category=${'programming'}`} className='sideNavLink' onClick={() => { setShowNav(false) }}>Programming</Link>
                <Link to={`/categoryPage?category=${'gadgets'}`} className='sideNavLink' onClick={() => { setShowNav(false) }}>Gadgets </Link>
                <Link to={`/categoryPage?category=${'trends'}`} className='sideNavLink' onClick={() => { setShowNav(false) }}>Trends</Link>
                <Link to={`/categoryPage?category=${'techNews'}`} className='sideNavLink' onClick={() => { setShowNav(false) }}>Tech News</Link>
            </div>
        </div>
    )
}
