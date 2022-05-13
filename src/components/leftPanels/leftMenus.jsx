import React, { useEffect } from 'react'

import styles            from './leftMenus.module.css'
import { Link, NavLink } from 'react-router-dom'
import { Badge }         from 'antd'

const LeftMenus = ({ defaultUrl }) => {

    useEffect(() => {
        // return () => {
        //     effect
        // }
    }, [])


    return (
        <ul className={styles.ul}>
            <li>
                <NavLink to={defaultUrl} className={({ isActive }) => (isActive ? styles.active : '')}>
                    <span>
                        <span className={`${styles.notification} ${styles.ic}`}/>
                        <Badge dot offset={[10, 9]} count={10}>
                            알림
                        </Badge>
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={`${defaultUrl}/bookmark`} className={({ isActive }) => (isActive ? styles.active : '')}>
                    <span>
                        <span className={`${styles.bookmark} ${styles.ic}`}/>
                        <Badge dot offset={[10, 9]} count={0}>
                내가 찜한 피드
                        </Badge>
                    </span>
                </NavLink>
            </li>
            <li>
                <span>
                    <span className={`${styles.star} ${styles.ic}`}/>
                    <Badge dot offset={[10, 9]} count={0}>
                        즐겨찾기
                    </Badge>
                </span>
                <div className={`${styles.section}`}>
                    <span className={`${styles.empty}`}>등록된 즐겨찾기가 없습니다</span>
                </div>
            </li>
            <li>
                <div className={styles.projectWrap}>
                    <div className={styles.project_title}>
                        <span>
                            <span className={`${styles.project} ${styles.ic}`}/>
                            프로젝트
                        </span>
                        <span className={`${styles.addProject} ${styles.ic}`}/>
                    </div>

                    <Link to={`${defaultUrl}/project/184`}>
                        <div className={styles.projectItem}>
                            <span>
                                PremiumAX
                                <span className={styles.badge_s}>26</span>
                            </span>
                        </div>
                    </Link>

                    <Link to={`${defaultUrl}/project/176`}>
                        <div className={styles.projectItem}>
                            <span>
                                PremiumPX
                            </span>
                        </div>
                    </Link>

                    <Link to={`${defaultUrl}/project/175`}>
                        <div className={styles.projectItem}>
                            <span>
                                PremiumDX
                                <span className={styles.badge_s}>1</span>
                            </span>
                        </div>
                    </Link>

                </div>
            </li>
            <li>
                <NavLink to={`${defaultUrl}/setting`} className={({ isActive }) => (isActive ? styles.active : '')}>
                    <span>
                        <span className={`${styles.setting} ${styles.ic}`}/>
                        샌드위치 설정
                    </span>
                </NavLink>
            </li>
        </ul>
    )
}

export default LeftMenus
