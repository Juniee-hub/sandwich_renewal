import React, { useEffect, useState } from 'react'
import { useParams }                  from 'react-router-dom'

const UseResize = ({width,height}) => {

    const { channel } = useParams()

    const defaultUrl = `/sandwich/${channel}`

    const [innerHeight, setInnerHeight] = useState(height || window.innerHeight)
    const [innerWidth, setInnerWidth] = useState(width || 320)
    const handleResize = (node, { size }) => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(size.width)
    }

    // TODO 반응형 고려하여 size 조절하기
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return { defaultUrl,handleResize,innerWidth,innerHeight }
}

export default UseResize
