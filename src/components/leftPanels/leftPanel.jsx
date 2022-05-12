import React, { useEffect, useState } from 'react'

import styles                      from './leftPanel.module.css'
import LeftNavi                    from './navi/lefNavi'
import LeftMenus                   from './leftMenus'
import { useParams }               from 'react-router-dom'
import { ResizableBox, Resizable } from 'react-resizable'
import 'react-resizable/css/styles.css'

const LefPanel = () => {

    const { channel } = useParams()

    const defaultUrl = `/sandwich/${channel}`

    const [innerHeight, setInnerHeight] = useState(window.innerHeight)
    const handleResize = () => {
        setInnerHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <ResizableBox width={320} height={innerHeight} className={styles.wrap} axis="x"
                      minConstraints={[180, innerHeight]} maxConstraints={[600, innerHeight]}>
            <div className={styles.menu}>
                <LeftNavi defaultUrl={defaultUrl}/>
                <LeftMenus defaultUrl={defaultUrl}/>
            </div>
        </ResizableBox>
    )
}

export default LefPanel
