import React, { useEffect }       from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { authStore } from '../stores/auth'
import LeftPanel     from '../components/leftPanels/leftPanel'
import RightPanel    from '../components/rightPanels/rightPanel'
import CenterPanel   from '../components/centerPanels/centerPanel'
import styles        from './sandwich.module.css'

const Sandwich = () => {

    const { isLogin } = authStore()

    const navigate = useNavigate()

    const { channel } = useParams()

    useEffect(() => {
        console.log(`현재 채널 id = ${channel}`)
        if (isLogin === false) {
            navigate('/login')
        }
    }, [])

    return (
        <div className={styles.wrap}>
            <LeftPanel/>
            <CenterPanel/>
            <RightPanel/>
        </div>
    )
}

export default Sandwich
