import React, { useEffect } from 'react'

import { authStore }                from '../states/auth'
import Join                         from '../components/auth/join'
import Login                        from '../components/auth/login'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer                       from '../components/footer/footer'
import styles                       from './auth.module.css'

const Auth = () => {

    const { isLogin } = authStore()

    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLogin === true) {
            navigate('/')
        }
    }, [])

    const goToComponent = (pathname) => {
        switch (pathname) {
            case '/login':
                return <Login/>
            case '/register':
                return <Join/>
            default:
                return <Login/>
        }
    }

    return (
        <>
            <div className={styles.Wrap}>
                <div>
                    <div className={styles.logWrap}>
                        <div className={styles.logo}></div>
                    </div>
                {goToComponent(pathname)}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Auth
