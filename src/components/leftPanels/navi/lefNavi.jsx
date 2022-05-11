import React, { useEffect, useState } from 'react'
import { Dropdown }                   from 'antd'
import { nanoid }                     from 'nanoid'

import LeftNaviItem     from './leftNaviItem'
import styles           from './leftNavi.module.css'
import { channelStore } from '../../../stores/channel'
import { useParams }    from 'react-router-dom'

const LeftNavi = ({ defaultUrl }) => {

    // TODO 임시 데이터, 통신 후 적용으로 바꿔야함
    const { channels } = channelStore()
    const [visible, setVisible] = useState(true)
    const { channel } = useParams()

    const setupCurrentChannel = () => {
        let returnValue = {}
        channels.map(item => {
            if (item.id === parseInt(channel)) {
                returnValue = { ...item }
                return false
            }
        })
        return returnValue
    }

    const [currentChannel, setCurrentChannel] = useState(setupCurrentChannel)

    let treeData = []
    let ownChannels = []
    let memberChannels = []

    const setupTreeData = () => {
        channels.map(item => {
            const inputData = {
                title: item.name,
                key: item.id,
                channel_id: item.id,
                check_read_count: item.check_read_count
            }
            if (item.grant === 'owner') {
                ownChannels.push(inputData)
            } else if (item.grant === 'member') {
                memberChannels.push(inputData)
            }
        })
        treeData.push({
            title: '내 샌드위치',
            key: '0-0',
            children: ownChannels
        })
        treeData.push({
            title: '참여중인 샌드위치',
            key: '0-1',
            children: memberChannels
        })
    }

    useEffect(() => {
        setupTreeData()
    }, [])

    const handleClose = () => {
        setVisible(false)
    }
    const handleVisibleChange = (flag) => {
        // if (flag === true) {
        //     this.props.socket.io.emit('send', this.props.user.id, 'channelReload');
        // }
    }

    // console.log(currentChannel)
    // console.log(treeData)
    return (
        <Dropdown
            overlayClassName="channelDW"
            overlay={
                <LeftNaviItem treeData={treeData} handleClose={handleClose} currentChannel={currentChannel} defaultUrl={defaultUrl}/>}
            trigger={['click']}
            //visible={this.state.visible}
            onVisibleChange={handleVisibleChange}
        >
            <div className={styles.wrap}>
                <div className={styles.innerWrap}>
                    <span>
                        {currentChannel.name}
                    </span>
                </div>
                <span className={styles.arrowDown}></span>
            </div>
        </Dropdown>
    )
}

export default LeftNavi
