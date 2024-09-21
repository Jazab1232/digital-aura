import React from 'react'
import '../styles/header.css'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'

export default function Header({ showNav, setShowNav, search, setSearch }) {
    function handleShowNav() {
        setShowNav(true)
    }
    function handleHideNav() {
        setShowNav(false)
    }

    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'> <img src={logo} alt="" /></Link>
            </div>
            <div className="navLinks">
                <Link to='/' className='navLink'>Home</Link>
                <Link to={`/categoryPage?category=${'programming'}`} className='navLink'>Programming</Link>
                <Link to={`/categoryPage?category=${'gadgets'}`} className='navLink'>Gadgets </Link>
                <Link to={`/categoryPage?category=${'trends'}`} className='navLink'>Trends</Link>
                <Link to={`/categoryPage?category=${'techNews'}`} className='navLink'>Tech News</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div className='navSearch'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search...' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                </div >
                <div className='menuBar' >
                    {showNav
                        ? <i className="fa-regular fa-circle-xmark " onClick={handleHideNav} style={{ fontSize: '30px', opacity: '.8', display: showNav ? 'block' : 'none' }}></i>
                        : <i className="fa-solid fa-bars " onClick={handleShowNav} style={{ fontSize: '25px', opacity: '.8', display: showNav ? 'none' : 'inline-block' }}></i>
                    }
                </div>
            </div>
        </div>
    )
}
