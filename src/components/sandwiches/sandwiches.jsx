import React, { useEffect, useState }           from 'react'
import { Menu, Dropdown, Button, Space, Badge } from 'antd'
import { v4 as uuid4 }                          from 'uuid'

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
    const dropMenu = (
        <Menu
            items={[
                {
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            1st menu item
                        </a>
                    ),
                },
                {
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            2nd menu item
                        </a>
                    ),
                },
                {
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            3rd menu item
                        </a>
                    ),
                },
            ]}
        />
    )

    return (
        <div className={styles.Wrap}>
            <div className={styles.tabWrap}>
                {
                    tabLists.map(tabItem =>
                        <div>
                        <span key={uuid4()} onClick={() => handleTap(`${tabItem.state}`)}
                              className={tab === `${tabItem.state}` && `${styles.active}`}>
                            {tabItem.name}
                        </span>
                            <div key={uuid4()} className={styles.bar}></div>
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
                                <Menu.Item key={uuid4()}>
                                    <Link to={`/`}>샌드위치 설정</Link>
                                </Menu.Item>
                            </Menu>
                        }>
                            <div className={styles.ic_3dot}/>
                        </Dropdown>

                    </div>

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

                </div>


                <div>
                    <div className={styles.header}>
                    </div>

                    <div className={styles.body}>
                        <Badge count={100} offset={[0,0]}>
                            <div className={styles.logoWrap}>
                                <img className={styles.logoImg} src="https://sandwich.so/api/v1/storage/thumb/347" alt="Sandwich ThumbNail"/>
                            </div>
                        </Badge>
                    </div>
                    <div className={styles.bottom}>
                        <span className={styles.main}>MX사업부</span>
                        <span className={styles.sub}>정선희</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Sandwiches
