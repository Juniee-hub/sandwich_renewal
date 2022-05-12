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
    const [innerWidth, setInnerWidth] = useState(320)
    const handleResize = (node, { size }) => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(size.width)
    }

    // TODO 반응형 고려하여 size 조절하기
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <ResizableBox width={innerWidth} height={innerHeight} className={styles.wrap} axis="x" onResize={handleResize}
                      minConstraints={[180, innerHeight]} maxConstraints={[600, innerHeight]}>
            <div className={styles.menu}>
                <LeftNavi defaultUrl={defaultUrl}/>
                <LeftMenus defaultUrl={defaultUrl}/>
            </div>
        </ResizableBox>
    )
}

export default LefPanel
