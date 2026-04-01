'use client'

import { useState } from "react"
import "./Navbar.css"
import { Bag, DownArrow, Like, Logo, Person, Search } from '@/assets/Icons'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="hamburger_block">
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    ☰
                </button>

                <div className="navbar_left">
                    <Logo className="navbar_logo" />
                </div>
            </div>

            <h1 className="navbar_heading">
                LOGO
            </h1>

            <div className="navbar_icons">
                <Search className="nav_icon" />
                <Like className="nav_icon" />
                <Bag className="nav_icon" />
                <Person className="nav_icon" />
                <span className="nav_text">
                    ENG<DownArrow />
                </span>
            </div>
        </nav>
    )
}

export default Navbar