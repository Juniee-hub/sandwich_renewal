import React, { useEffect, useState }     from 'react'
import { Button, Empty, Pagination }      from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString                        from 'query-string'

import styles from './alarms.module.css'

const Alarms = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const getPage = () => {
        const nowPage = queryString.parse(location.search)
        return {
            current: parseInt(nowPage.page || 1),
            defaultPageSize: 15,
            showSizeChanger: false,
            total: 947,
        }
    }

    const [paging, setPaging] = useState(getPage)

    useEffect(() => {

        // return () => {
        // }
    }, [])

    const handlePageChange = (page) => {
        // const pager = { ...paging, current: page }
        setPaging({ ...paging, current: page })
        const href = `${location.pathname}?page=${page}`
        navigate(href)

        // Todo 다시 통신 하여 데이터 수정
    }

    return (
        <div className={styles.wrap}>
            <ul>
                <li>
                    <div className={styles.notificationWrap}>
                        <div className={styles.notification}>
                            <div className={styles.messageWrap}>
                                <div className={styles.on}></div>
                                <span>
                                    <a href="#" className="_profile" data-id="22">
                                        <strong>이명기</strong>님이 샌드위치에 가입했습니다.
                                    </a>
                                </span>
                            </div>
                            <span className={styles.date}>2022년 5월 12일 (목) 오후 2:20</span>
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.notificationWrap}>
                        <div className={styles.notification}>
                            <div className={styles.messageWrap}>
                                <div></div>
                                <span><a href="#" className="_profile" data-id="7"><strong>정금석</strong>님이 샌드위치에 가입했습니다.</a></span>
                            </div>
                            <span className={styles.date}>2022년 5월 12일 (목) 오전 8:49</span>
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.notificationWrap}>
                        <div className={styles.notification}>
                            <div className={styles.messageWrap}>
                                <div className={styles.on}></div>
                                <span className={styles.projectName}>[카이스트클리닉 테스트]</span><span><strong>박지호</strong>님이 상태를 요청으로 변경했습니다.</span>
                            </div>
                            <span className={styles.date}>2022년 5월 4일 (수) 오후 6:39</span>
                        </div>

                        <Link to={'/app/project?channel=8&amp;project=206#/comment/3003'}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.299" height="12.783" viewBox="0 0 13.299 12.783">
                                    <path d="M-6303,6039.8v12.283h12.8" transform="translate(6303.501 -6039.801)" fill="none" stroke="#e4e5e8" strokeWidth="1.5"/>
                                </svg>
                                <div className={styles.msgBox}>
                                    <div>
                                        <div className={styles.thumbnailWrap}>
                                            <img className={styles.thumbnail} src="https://sandwich.so/api/v1/storage/thumb/440" alt={'썸네일'}/>
                                        </div>
                                        <div className={styles.group}>
                                            <div className={styles.infoWrap}>
                                                <div className={styles.nickNameWrap}>
                                                    <div className="msg">
                                                        <span className={styles.nickName}>박지호</span><span className={styles.date}>2022년 5월 4일 (수)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.msgGroup}>
                                                {/*<div className="msg ql-editor">*/}
                                                <div className={`${styles.msg} ${styles.editor}`}>
                                                    <div>검진내역에 검사결과서 링크만 있으면 타인도 로그인 없이 열람 가능합니다.http://clinic2022.planidev.com/mypage02/confirm_findings/id/156</div>
                                                </div>
                                                <div className={styles.msgAppWrap}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>

            </ul>

            <div className={styles.paginationWrap}>
                <Pagination {...paging} onChange={handlePageChange}/>
            </div>


            {/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>*/}
            {/*    <Empty description="새로운 구성원 또는 파트너를 초대하여 샌드위치를 시작해보세요." />*/}
            {/*    <Button type="primary" shape="round" size="large" style={{ width: 180 }} onClick={this.handleGoSetting}>샌드위치에 초대하기</Button>*/}
            {/*</div>*/}


        </div>
    )
}

export default Alarms
