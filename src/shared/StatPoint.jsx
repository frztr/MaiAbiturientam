import React from 'react'

const StatPoint = ({ className,maintext, sidetext}) => {
  return (
    <div className={`flex flex-col gap-y-6 text-blue dark:text-white leading-tight items-center ${className}`}>
        <span className='font-bold text-7xl text-center xl:text-6xl xxxs:text-5xl'>{maintext}</span>
        <span className='font-medium text-3xl text-center xl:text-2xl xxxs:text-xl'>{sidetext}</span>
    </div>
  )
}

export default StatPoint