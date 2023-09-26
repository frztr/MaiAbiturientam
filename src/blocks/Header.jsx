import React from 'react'
import { Logo, Sleep } from '../icons';
import { ThemeContext } from '../App';
import { useContext } from 'react';

const Header = () => {

  const context = useContext(ThemeContext);

  return (
    <header className='flex py-5 flex-col items-center'>
      <div className='max-w-[1400px] 1.5xl:max-w-[1200px] xl:px-16 w-full flex flex-row justify-between '>
        <a href='' className='flex flex-row gap-x-6 items-center'>
          <Logo className={`h-16 aspect-square text-blue dark:text-white`} />
          <span className=' font-medium text-3xl text-blue dark:text-white'>Абитуриентам</span>
        </a>
        <button className='flex items-center justify-center p-4 w-20 h-20 cursor-pointer' onClick={() => {
          var html = document.querySelector('html');
          if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            context.setdark(false);
            document.cookie = "theme:light";
          } else {
            html.classList.add('dark');
            context.setdark(true);
            document.cookie = "theme:dark";
          }
        }}>
          <Sleep className={`text-blue dark:text-white `} />
        </button>
      </div>
    </header>
  )
}

export default Header