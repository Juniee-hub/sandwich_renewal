import React    from 'react'
import { Menu } from 'antd'

const FeedLabel = ({stateOptions,handleState}) => {

    return (
        <Menu>
            {
                stateOptions.map( (state) =>
                    <Menu.Item key={state.value}>
                        <a onClick={()=>handleState(state.value)}>{state.label}</a>
                    </Menu.Item>
                )
            }
        </Menu>
    )
}

export default FeedLabel
