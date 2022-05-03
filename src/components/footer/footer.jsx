import React from 'react'

import styles from './footer.module.css'
const Footer = () => {
    return (
        <ul className={styles.footer}>
           <li>상호명(주)플랜아이 주소:(34050)대전 유성구 문지로 282-10 플랜아이</li>
           <li>사업자번호 : 305-81-72470 대표이사 : 이명기</li>
           <li>© 2021 Plani. ALL Rights Reserved.</li>
        </ul>
    )
}

export default Footer
