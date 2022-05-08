import React, { useEffect } from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined }    from '@ant-design/icons'
import styles                            from './login.module.css'
import { NavLink }                       from 'react-router-dom'
import KakaoLogin                        from './KakaoLogin'
import GoogleLogin                       from './GoogleLogin'


const Login = () => {

    useEffect(() => {
        // return () => {
        //     effect
        // }
    }, [])

    const handleLogin = () =>{

    }

    return (
        <>
            <Form
                name="normal_login"
            >
                <Form.Item name="email" rules={[{ required: true, message: '이메일을 입력해주세요.' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="E-Mail" style={{
                        height: 46,
                        borderRadius: 6
                    }}/>
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}>
                    <Input prefix={
                        <LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Password" style={{
                        height: 46,
                        borderRadius: 6
                    }}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.loginBtn}>로그인</Button>
                </Form.Item>
            </Form>

            <div className={styles.btnWrap}>
                <NavLink to="/find"><span className={styles.findPW}>비밀번호 찾기</span></NavLink>
                <NavLink to="/register"><span className={styles.register}>회원가입</span></NavLink>
            </div>

            <div className={styles.line}>
                <span>또는</span>
            </div>
            <div className={styles.snsLoginWrap}>
                <KakaoLogin onLogin={handleLogin} text="Kakao <b>로그인</b>" />
                {/*<GoogleLogin onLogin={handleLogin} text="Google <b>로그인</b>" />*/}
            </div>
        </>
    )
}

export default Login
