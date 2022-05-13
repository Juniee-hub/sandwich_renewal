import React, { useEffect, useState }          from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { authStore } from '../stores/auth'
import LeftPanel     from '../components/leftPanels/leftPanel'
import RightPanel    from '../components/rightPanels/rightPanel'
import CenterPanel   from '../components/centerPanels/centerPanel'
import styles        from './sandwich.module.css'

const Sandwich = () => {

    const { isLogin } = authStore()
    const navigate = useNavigate()
    const location = useLocation()

    const getMenu = () => {
        const pathnameArr = location.pathname.split('/')
        return pathnameArr[3] || 'main'
    }

    // Todo 프로젝트 이름 가져와서 Title 이름 바꿔야함
    const titleSetting = {
        main: '알림',
        bookmark: '내가 찜한 피드',
        setting: '샌드위치 설정',
    }

    const [menuType] = useState(getMenu)

    const handleInfo = () => {
        return {
            title: titleSetting[menuType] || '프로젝트 이름~~',
            type: menuType,
        };
    }
    const [pageData] = useState(handleInfo)

    useEffect(() => {
        if (isLogin === false) {
            navigate('/login')
        }
    }, [])


    return (
        <div className={styles.wrap}>
            <LeftPanel pageData={pageData}/>
            <CenterPanel pageData={pageData}/>
            <RightPanel pageData={pageData}/>
        </div>
    )
}

export default Sandwich
