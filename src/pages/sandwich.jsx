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

    const stateOptions = [
        { value: '0', label: '선택', color: '#D3D8E0', bgColor: '#ffffff', boxShadow: '0 0 0px 1px #D3D8E0 inset' },
        { value: '1', label: '요청', color: '#3C82FF', bgColor: '#ffffff', boxShadow: '0 0 0px 1px #3C82FF inset' },
        { value: '2', label: '진행', color: '#ffffff', bgColor: '#3C82FF', boxShadow: '0 0 0px 1px #3C82FF inset' },
        { value: '3', label: '완료', color: '#ffffff', bgColor: '#ABABAC', boxShadow: '0 0 0px 1px #ABABAC inset' },
        { value: '4', label: '보류', color: '#ABABAC', bgColor: '#ffffff', boxShadow: '0 0 0px 1px #ABABAC inset' },
        { value: '5', label: '미결', color: '#ABABAC', bgColor: '#ffffff', boxShadow: '0 0 0px 1px #ABABAC inset' }
    ];

    return (
        <div className={styles.wrap}>
            <LeftPanel pageData={pageData}/>
            <CenterPanel pageData={pageData} stateOptions={stateOptions}/>
            <RightPanel pageData={pageData} stateOptions={stateOptions}/>
        </div>
    )
}

export default Sandwich
