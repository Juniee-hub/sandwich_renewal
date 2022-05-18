import React from 'react'

import styles                      from './leftPanel.module.css'
import LeftNavi                    from './navi/lefNavi'
import LeftMenus                   from './leftMenus'
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
import useResize from '../../hook/useResize'

const LefPanel = () => {

    const { defaultUrl,handleResize,innerWidth,innerHeight } = useResize({})

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
