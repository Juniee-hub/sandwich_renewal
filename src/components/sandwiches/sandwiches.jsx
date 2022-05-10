import React, { useEffect, useState }           from 'react'
import { Menu, Dropdown, Button, Space, Badge } from 'antd'
import { nanoid }                               from 'nanoid'
import classNames                               from 'classnames'

import styles            from './sandwiches.module.css'
import { Link, NavLink } from 'react-router-dom'

const Sandwiches = () => {

    const [tab, setTab] = useState('all')

    const tabLists = [
        { state: 'all', name: '모아보기' },
        { state: 'my', name: '내 샌드위치' },
        { state: 'ing', name: '참여중' },
        { state: 'project', name: '프로젝트 모아보기' },
    ]

    useEffect(() => {

        // return ()=>{}
    }, [])

    const handleTap = (state) => {
        setTab(state)
    }

    // ToDo 소스 정리하기

    return (
        <div className={styles.Wrap}>
            <div className={styles.tabWrap}>
                {
                    tabLists.map(tabItem =>
                        <div key={nanoid()}>
                        <span onClick={() => handleTap(`${tabItem.state}`)}
                              className={classNames(null, tab === `${tabItem.state}` && `${styles.active}` )}>
                            {tabItem.name}
                        </span>
                            <div className={styles.bar}></div>
                        </div>
                    )
                }
            </div>

            <div className={styles.cardWrap}>

                <div className={styles.add}>
                    <div className={styles.ic_plus}></div>
                    <div className={styles.bottom}>
                        <span>샌드위치 추가</span>
                    </div>
                </div>

                <div>
                    <div className={styles.header}>
                        <span className={`${styles.free} ${styles.plan}`}>FreePlan</span>

                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key={nanoid()}>
                                    <NavLink to={`/`}>샌드위치 설정</NavLink>
                                </Menu.Item>
                            </Menu>
                        }>
                            <div className={styles.ic_3dot}/>
                        </Dropdown>

                    </div>

                    <NavLink to={`/sandwich/48`}>
                        <div className={styles.body}>
                            <Badge count={'10'} offset={[0, 0]}>
                                <div className={styles.logoWrap}>
                                    <div className={styles.logo}>샌</div>
                                </div>
                            </Badge>
                        </div>


                        <div className={styles.bottom}>
                            <span className={styles.main}>샌드위치 개선사항</span>
                            <span className={styles.sub}>김준성</span>
                        </div>
                    </NavLink>

                </div>


                <div>
                    <div className={styles.header}>
                    </div>

                    <NavLink to={`/sandwich/8`}>
                        <div className={styles.body}>
                            <Badge count={100} offset={[0, 0]}>
                                <div className={styles.logoWrap}>
                                    <img className={styles.logoImg} src="https://sandwich.so/api/v1/storage/thumb/347" alt="Sandwich ThumbNail"/>
                                </div>
                            </Badge>
                        </div>
                        <div className={styles.bottom}>
                            <span className={styles.main}>MX사업부</span>
                            <span className={styles.sub}>정선희</span>
                        </div>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default Sandwiches
