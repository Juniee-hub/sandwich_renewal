import React, { useEffect, useState }        from 'react'
import { Input, Dropdown, Menu, DatePicker } from 'antd'

import styles from './editor.module.css'

const Editor = () => {

    const [placeholderMsg, setPlaceholderMsg] = useState('Shift+Enter로 줄바꿈 하실 수 있습니다.')

    useEffect(()=>{

    },[])

    const handleFocus = () => {

    }

    return (
        <div className={styles.inputBoxEditor}>
            <Input onFocus={handleFocus} bordered={false} placeholder={placeholderMsg} />
        </div>
    )
}

export default Editor
