import React from 'react'

const Pass = ({className,...otherprops}) => {
    return (
        <svg className={`${className} stroke-current`} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherprops}>
            <path d="M6 36C6 21.8579 6 14.7868 10.3934 10.3934C14.7868 6 21.8579 6 36 6C50.142 6 57.2134 6 61.6066 10.3934C66.0001 14.7868 66.0001 21.8579 66.0001 36C66.0001 50.142 66.0001 57.2134 61.6066 61.6066C57.2134 66.0001 50.142 66.0001 36 66.0001C21.8579 66.0001 14.7868 66.0001 10.3934 61.6066C6 57.2134 6 50.142 6 36Z" strokeWidth="5" />
            <path d="M25.5 37.5L31.5 43.5L46.5 28.5"  strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Pass