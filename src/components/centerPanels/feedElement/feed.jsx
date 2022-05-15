import React, { useEffect, useState } from 'react'

import styles       from './feed.module.css'
import { Dropdown } from 'antd'
import FeedLabel    from './feedLabel'
import * as SvgIcon from '../../../service/svgIcons'
import classNames   from 'classnames'

const Feed = ({ stateOptions }) => {

    // (3) 0 <= random <= 9
    const rand_0_5 = Math.floor(Math.random() * (10 - 5))
    const [feedState, setFeedState] = useState(stateOptions[rand_0_5])
    const [isDropDown, setIsDropDown] = useState(false)

    const handleState = (value) => {
        setFeedState(stateOptions.find(item => item.value === value))
        console.log(feedState)
    }

    return (

        <>
            <div className={styles.dateMain}>
                <span>2022년 4월 22일 (금)</span>
            </div>

            <div className={styles.msgBox}>
                <div className={classNames(`${styles.labelWrap}`, isDropDown && `${styles.active}`)}>
                    <Dropdown
                        trigger={['click']}
                        open
                        onVisibleChange={e => setIsDropDown(!isDropDown)}
                        overlay={<FeedLabel stateOptions={stateOptions} handleState={handleState}/>}
                    >
                        <div className={styles.labelBox} style={{
                            background: feedState.bgColor,
                            boxShadow: feedState.boxShadow,
                            cursor: 'pointer',
                            display: 'flex'
                        }}>
                            <span style={{ fontSize: '12px', color: feedState.color }}>{feedState.label}</span>
                            {/*<span >완료</span>*/}
                            <div className={styles.selectIndicator} dangerouslySetInnerHTML={{ __html: SvgIcon.getInitialSvgIcon('selectBoxArrow', feedState.color) }}/>
                        </div>
                    </Dropdown>
                </div>
                <div>
                    <div className={styles.thumbnailWrap}>
                        <img src="https://sandwich.so/api/v1/storage/thumb/421" alt={'썸네일'}/>
                    </div>
                    <div className={styles.infoWrap}>
                        <div className={styles.nickNameWrap}>
                            <div className="msg">
                                <span className={`${styles.nickName} _profile`} data-id="51">안현진</span>
                                <span className={styles.date}>오전 11:17</span>
                            </div>
                        </div>
                        <div className={styles.msgGroup}>
                            <div className={`${styles.msg} ${styles.ql_editor}`}>
                                <div>
                                    <div className="embed-innerApp">
                                        <img src="https://sandwich.so/api/v1/storage/resize/2252" className="attachedImg"/>
                                    </div>
                                    <p><br/></p><p>흰색 PNG 로고 같은 파일을 업로드할 경우 마치 첨부파일이 없는것과 같이 보여집니다.</p>
                                    <p>첨부 이미지 위에 회색 박스를 깔아주거나 테두리를 넣어주는 등 개선이 필요해보입니다</p></div>
                            </div>
                            <div className={styles.msgAppWrap}>
                                <div className={styles.msgApp}>
                                    <div className={styles.storageWrap}>
                                        <div className="ant-image">
                                            <img alt="clipboard.png" className="ant-image-img ant-image-img-placeholder" src="https://sandwich.so/api/v1/storage/thumb/2252"/>
                                            <div className="ant-image-mask">
                                                <span role="img" aria-label="zoom-in" className="anticon anticon-zoom-in">
                                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="zoom-in" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.comment}>댓글
                                    <span className="commentCnt">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bookmark}>
                    <a title="찜"><span className={styles.ic_bookmark}></span></a>
                </div>
            </div>

        </>

    )
}

export default Feed
