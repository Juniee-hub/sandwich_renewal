import React, { useEffect } from 'react'

import styles from './centerPanel.module.css'
import Title  from './title'
import Feeds  from './feeds'
import Alarms from './alarms'
const CenterPanel = ({pageData}) => {

    useEffect(() => {

        // return () => {
        //
        // }

    }, [])


    return (
        <>
            <Title pageData={pageData}/>
            <Alarms />
            <Feeds />
        </>
    )
}

export default CenterPanel
