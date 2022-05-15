import React, { useEffect, useState } from 'react'

import styles from './centerPanel.module.css'
import Title  from './title'
import Feeds  from './feedElement/feeds'
import Alarms from './alarms'

const CenterPanel = ({ pageData,stateOptions }) => {

    const setPageData = () => {

        if (pageData.type === 'project') {
            return { ...pageData, input: true }
        } else {
            return pageData
        }
    }

    const [pageInfo, setPageInfo] = useState(setPageData)

    useEffect(() => {
        // return () => {
        //
        // }
    }, [])

    return (
        <>
            <Title pageData={pageInfo}/>
            {
                pageData.type === 'main' &&
                <Alarms/>
            }

            {
                (pageData.type === 'project' || pageData.type === 'bookmark') &&
                <Feeds pageData={pageInfo} stateOptions={stateOptions}/>
            }
        </>
    )
}

export default CenterPanel
