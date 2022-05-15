import React, { useEffect } from 'react'

import styles from './feeds.module.css'
import Editor from '../../editor/editor'
import Feed   from './feed'

const Feeds = ({ pageData,stateOptions }) => {

    const { input } = pageData

    //Todo infinite Scroll 적용

    useEffect(() => {
        console.log(pageData)
    }, [])

    return (
        <div className={styles.wrap}>
            {
                input === true &&
                <Editor/>
            }
            <div className={styles.feeds}>

                <Feed stateOptions={stateOptions}/>

            </div>
        </div>
    )
}

export default Feeds
