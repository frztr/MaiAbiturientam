import React from 'react'

const Arrow = ({className, ...otherprops}) => {
    return (
        <svg className={`${className} stroke-current`} xmlns="http://www.w3.org/2000/svg" fill='none' width="12" height="20" viewBox="0 0 12 20" {...otherprops}>
            <path d="M10 18L2 10L10 2"  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Arrow