import React, { useEffect, useState }            from 'react'
import { Form, Input, Button, Checkbox, Drawer } from 'antd'
import { UserOutlined, LockOutlined }            from '@ant-design/icons'
import { NavLink }                               from 'react-router-dom'
import { v4 as uuid4 }                           from 'uuid'

import styles from './join.module.css'

const Join = () => {

    const [inviteEmail, setInviteEmail] = useState()
    const [visibleTerms, setVisibleTerms] = useState(false)
    const [visiblePrivacy, setVisiblePrivacy] = useState(false)

    useEffect(() => {

        // return ()=>{}
    }, [])

    return (
        <>
            <div className={styles.title}>회원가입</div>
            <Form
                name="normal_login"
                className={styles.registerForm}
            >
                <Form.Item
                    name="email"
                    messageVariables={{ label: 'E-Mail: ' }}
                    rules={[
                        { required: true, type: 'email' },
                        // { validator: this.handleCheckEmail }
                    ]}
                    validateTrigger="onBlur"
                    initialValue={inviteEmail}
                >
                    <Input placeholder="E-Mail" style={{
                        height: 46,
                        borderRadius: 6
                    }} disabled={inviteEmail || false}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    messageVariables={{ label: '비밀번호: ' }}
                    rules={[{ required: true, min: 6 }]}
                    validateTrigger="onBlur"
                >
                    <Input.Password placeholder="비밀번호" autoComplete="off" style={{
                        height: 46,
                        borderRadius: 6,
                        imeMode: false
                    }}/>
                </Form.Item>
                <Form.Item
                    name="password_confirmation"
                    messageVariables={{ label: '비밀번호 확인: ' }}
                    rules={[
                        { required: true, min: 6 },
                        ({ getFieldValue }) => ({
                            validator (_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject('비밀번호가 일치하지 않습니다.')
                            },
                        }),
                    ]}
                    validateTrigger="onBlur"
                >
                    <Input.Password placeholder="비밀번호 확인" autoComplete="off" style={{ height: 46, borderRadius: 6 }}/>
                </Form.Item>
                <Form.Item
                    name="name"
                    messageVariables={{ label: '이름: ' }}
                    rules={[{ required: true, min: 2, max: 20 }]}
                    validateTrigger="onBlur"
                >
                    <Input placeholder="이름" autoComplete="off" style={{ height: 46, borderRadius: 6 }}/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    className={styles.notice}
                    messageVariables={{ label: '휴대폰 번호: ' }}
                    extra="프로젝트 초대, 요청 글 등록 등 중요 이벤트를 알림톡으로 발송해 드립니다."
                    rules={[
                        {
                            pattern: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
                            message: '휴대폰 번호의 형식이 올바르지 않습니다.'
                        }
                    ]}
                    validateTrigger="onBlur"
                >
                    <Input placeholder="010-1234-1234" autoComplete="off" size="13" type="text" style={{
                        height: 46,
                        borderRadius: 6
                    }}/>

                </Form.Item>
                <Form.Item
                    className="agreement"
                    name="agreement"
                    valuePropName="checked"
                    messageVariables={{ label: '약관: ' }}
                    rules={[{ required: true, message: '서비스 이용약관 및 개인정보취급방침에 동의하셔야 합니다.' }]}
                >
                    <div className={styles.checkWrap}>
                        <div>
                            <Checkbox/>
                            {[
                                <a onClick={() => {setVisibleTerms(true)}} key={uuid4()}><span className="btnAtag">서비스 이용약관 </span></a>,
                                ', ',
                                <a onClick={() => {setVisiblePrivacy(true)}} key={uuid4()}><span className="btnAtag">개인정보 취급방침</span></a>
                            ]}
                        </div>
                        <div className="span">을 확인하였고, 이에 동의합니다.</div>
                    </div>
                </Form.Item>
                <div className="field-to-update"></div>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.btn}>회원가입</Button>
                </Form.Item>
            </Form>

            <Drawer title="서비스 이용약관" width="90%" placement="right" onClose={() => {setVisibleTerms(false)}} visible={visibleTerms}>
                {/*<Terms/>*/}
            </Drawer>
            <Drawer title="개인정보 처리방침" width="90%" placement="right" onClose={() => setVisiblePrivacy(false)} visible={visiblePrivacy}>
                {/*<Privacy/>*/}
            </Drawer>

        </>
    )
}

export default Join
