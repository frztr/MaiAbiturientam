import React from 'react'
import { Smk, Smpp, Aerosila, Basis } from '../icons';

const OurPartners = () => {

  const props = {
    className: 'text-blue dark:text-white h-24 object-cover xl:h-16 '
  };
  return (
    <div className='pb-28 1.5xl:px-24 pt-14 flex flex-col w-full items-center xxs:px-8 xxs:pb-14 '>
      <div className='max-w-[1400px] flex flex-col gap-y-16 w-full '>
        <span className='font-bold text-6xl text-blue dark:text-white text-center'>Наши партнёры</span>
        <div className='flex flex-row justify-between xxs:grid xxs:grid-cols-2 xxs:gap-8 xxs:items-center xxs:justify-items-center xxxs:flex xxxs:flex-col'>
            <Smk {...props} />
            <Smpp {...props} />
            <Aerosila {...props} />
            <Basis {...props} />
        </div>
      </div>
    </div>
  )
}

export default OurPartners