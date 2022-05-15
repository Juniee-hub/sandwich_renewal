import React, { memo, useEffect, useState } from 'react'

import styles          from './title.module.css'
import Profile         from '../common/profile'

const Title = memo(({ pageData }) => {
    // ToDo 프로젝트별 구분값과 확인하여 TRUE FALSE 변경해야함
    const [isBookmark, setIsBookmark] = useState(false)

    useEffect(() => {
        // return () => {
        // }
    }, [isBookmark])

    const handleBookmark = () => {
        setIsBookmark(!isBookmark)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                {pageData.type === 'project' &&
                    <span className={styles.ic_star} onClick={handleBookmark}></span>
                }
                <span>{pageData.title}</span>
            </div>
            <Profile/>
        </div>
    )
})

export default Title
