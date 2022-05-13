import React       from 'react'
import { NavLink } from 'react-router-dom'

import styles  from './header.module.css'
import Profile from '../common/profile'

const Header = () => {
    return (
        <div className={styles.header}>

            <NavLink to="/">
                <img className={styles.logo} src={'https://sandwich.so/images/logo.png'} alt={'Logo'}/>
            </NavLink>

            <Profile/>

        </div>
    )
}

export default Header
