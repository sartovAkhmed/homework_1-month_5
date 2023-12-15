import React from 'react'
import stylles from './NavBar.module.scss'

import { NavLink, Link } from 'react-router-dom'

export const NavBar = () => {
    const activeNav = ({isActive}) => isActive ? 'active-link ' : ''
    return (
        <header className={stylles.header}>
            <div className="container">
                <div className={stylles.header__inner}>
                    <div className={stylles.nav__logo}>
                        Logo TYPE <span style={{color: 'red'}}>*</span>
                    </div>
                    <nav>
                        <ul className={stylles.header__nav}>
                            <li><NavLink className={activeNav} to='/'>Home</NavLink></li>
                            <li><NavLink className={activeNav} to='/posts'>Posts</NavLink></li>
                            <li><NavLink className={activeNav} to='/create-posts'>Create posts</NavLink></li>
                        </ul>
                    </nav>
                    <div className={stylles.nav__sign}>
                        <button className={stylles.nav__button}>register</button>
                        <button className={stylles.nav__button}>sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
