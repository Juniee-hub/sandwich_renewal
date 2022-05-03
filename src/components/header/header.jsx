import React       from 'react'
import { NavLink } from 'react-router-dom'

import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>

            <NavLink to="/">
                <img className={styles.logo} src={'https://sandwich.so/images/logo.png'} alt={'Logo'}/>
            </NavLink>

            <div className={styles.profileWrap}>
                <div className={styles.profile}>

                </div>
            </div>

        </div>
    )
}

export default Header
