import React, { useState } from 'react'
import ReactKakaoLogin     from 'react-kakao-login'
import { Alert, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

import styles from './KakaoLogin.module.css';


const KakaoLogin = ({text}) => {

    const [snsRelational, setSnsRelational] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const token = process.env.REACT_APP_KAKAO_AUTH_TOKEN;


    const KakaoResponse = () => {

    }

    const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

    return (
        <>
            {snsRelational &&
                <Alert
                    description={<span>카카오 계정이 인증되었습니다.<br />샌드위치 아이디로 로그인하시면 카카오 계정이 자동 연결되며,<br />이후부터는 카카오 계정으로 간편하게 로그인하실 수 있습니다.</span>}
                    type="info"
                    style={{ marginBottom: 10 }}
                />
            }
            <ReactKakaoLogin
                token={token}
                onSuccess={KakaoResponse}
                onFail={console.error}
                onLogout={console.info}
                render={({ onClick }) => {
                    return (
                        <Spin spinning={isPending} indicator={antIcon}>
                            <div className={styles.kakao} onClick={onClick}>
                                <span className={styles.ic_kakao} />
                                <span dangerouslySetInnerHTML={{ __html: text }} />
                            </div>
                        </Spin>
                    );
                }}
            />
        </>
    )
}

export default KakaoLogin
