import React, { useState } from 'react'
// import ReactGoogleLogin    from 'react-google-login';
import { Alert, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

import styles from './GoogleLogin.module.css';

const GoogleLogin = ({text}) => {

    const [snsRelational, setSnsRelational] = useState(false)
    const [isPending, setIsPending] = useState(false)

    const token = process.env.REACT_APP_GOOGLE_AUTH_TOKEN;

    const GoogleResponse = () => {

    }

    const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

    return (

        <>
            {snsRelational &&
                <Alert
                    description={<span>구글 계정이 인증되었습니다.<br />샌드위치 아이디로 로그인하시면 구글 계정이 자동 연결되며,<br />이후부터는 구글 계정으로 간편하게 로그인하실 수 있습니다.</span>}
                    type="info"
                    style={{ marginTop: 20 }}
                />
            }
            {/*<ReactGoogleLogin*/}
            {/*    autoLoad={false}*/}
            {/*    clientId={token}*/}
            {/*    onSuccess={GoogleResponse}*/}
            {/*    onFailure={console.error}*/}
            {/*    render={renderProps => (*/}
            {/*        <Spin spinning={isPending} indicator={antIcon}>*/}
            {/*            <div className={styles.google} onClick={renderProps.onClick} disabled={renderProps.disabled}>*/}
            {/*                <span className={styles.ic_google} /><span dangerouslySetInnerHTML={{ __html: text }} />*/}
            {/*            </div>*/}
            {/*        </Spin>*/}
            {/*    )}*/}
            {/*/>*/}
        </>

    )
}

export default GoogleLogin
