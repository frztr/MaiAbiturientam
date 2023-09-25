import React from 'react'
import {Logo} from '../icons';

const Header = () => {
  return (
    <header className='flex py-5 flex-col items-center'>
      <div className='max-w-[1400px] 1.5xl:max-w-[1200px] xl:px-16 w-full '>
        <a href='' className='flex flex-row gap-x-6 items-center'>
          <Logo className={`h-16 aspect-square text-blue dark:text-white`} />
          <span className=' font-medium text-3xl text-blue dark:text-white'>Абитуриентам</span>
        </a>
      </div>
    </header>
  )
}

export default Header