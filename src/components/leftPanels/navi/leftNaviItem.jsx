import React, { useEffect } from 'react'
import { NavLink }          from 'react-router-dom'
import { Menu, Tree } from 'antd'
import { nanoid }     from 'nanoid'

import * as SvgIcon from '../../../service/svgIcons'
import styles       from './leftNaviItem.module.css'

const LeftNaviItem = ({ treeData, handleClose, currentChannel, defaultUrl }) => {

    return (
        <Menu>
            <div className={styles.wrap}>
                <div>
                    <div className="top">
                        <NavLink to={'/'} className="section_item">
                            <div className="homeWrap">
                                <span className="ic ic_pjmenu_home"/>
                                <span className="title">{'샌드위치 홈'}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: SvgIcon.getInitialSvgIcon('arrowRight') }}/>
                        </NavLink>
                    </div>
                    <div className="main">
                        <div className="channellogo">
                            {currentChannel.storages ?
                                <img src={`/api/v1/storage/thumb/${currentChannel.storages.id}`}/> :
                                <div className="tempLogo">{(currentChannel.name).substring(0, 1)}</div>
                            }
                        </div>
                        <div className="wrap">
                            <span className="name">{currentChannel.name}</span>
                            <span className="sub">{currentChannel.domain}.sandwich.so</span>
                        </div>
                    </div>
                    <div className="planWrap">
                        <div className="planFree"><span><b>Free Plan</b> 사용중</span></div>
                        {/*
                            <div className="btn"> 플랜 전환</div>
                            */}
                    </div>
                    <div className="treeWrap">
                        <Tree
                            defaultExpandAll={true}
                            treeData={treeData}
                            titleRender={record => (
                                <span
                                    key={record.key}
                                    style={{ display: 'inline-block', width: '100%', height: '100%', color: '#36353A' }}
                                >
                                    {record.channel_id
                                        ?
                                        <NavLink to={`/app?channel=${record.channel_id}`} onClick={handleClose}>
                                            {record.title}
                                            {record.check_read_count > 0 && <div className="badge"/>}
                                        </NavLink>
                                        :
                                        record.title
                                    }
                                </span>
                            )}
                        />
                    </div>
                </div>
            </div>
        </Menu>
    )
}

export default LeftNaviItem
