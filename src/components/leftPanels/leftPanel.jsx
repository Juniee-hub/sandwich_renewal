import React, { useEffect } from 'react'

import styles        from './leftPanel.module.css'
import LeftNavi      from './navi/lefNavi'
import LeftMenus     from './leftMenus'
import { useParams } from 'react-router-dom'
import { ResizableBox } from 'react-resizable'

const LefPanel = () => {

    const { channel } = useParams()

    const defaultUrl = `/sandwich/${channel}`

    return (
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <LeftNavi defaultUrl={defaultUrl}/>
                <LeftMenus defaultUrl={defaultUrl}/>
            </div>
        </div>
    )
}

export default LefPanel
