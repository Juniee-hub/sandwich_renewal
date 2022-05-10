import React, { useEffect } from 'react'
import { useNavigate }      from 'react-router-dom'

import { authStore } from '../stores/auth'
import Header        from '../components/header/header'
import Footer        from '../components/footer/footer'
import Sandwiches from '../components/sandwiches/sandwiches'
import styles     from './main.module.css'

const Main = () => {

    const { isLogin } = authStore()

    const navigate = useNavigate()

    useEffect(() => {
        if (isLogin === false) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <div className={styles.Wrap}>
                <Header/>
                <Sandwiches/>
            </div>
            <Footer/>
        </>
    )
}

export default Main
