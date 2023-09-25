import React from 'react'
import { Logo, Vk } from '../icons'

const Footer = () => {
  const Menus = [
    {
      title: "Навигация",
      items: [
        {
          link: "https://mai.ru",
          content: <>МАИ</>
        },
        {
          link: "https://sfmai.ru",
          content: <>Ступинский филиал</>
        },
        {
          link: "https://history.mai.ru/personalities",
          content: <>Персоналии</>
        },
        {
          link: "https://vuc-mai.ru/",
          content: <>Военная кафедра</>
        }
      ]
    },
    {
      title: "Поступление",
      items: [
        {
          link: "https://priem.mai.ru/rating/",
          content: <>Списки поступающих</>
        },
        {
          link: "https://priem.mai.ru/calendar/",
          content: <>Календарь абитуриента</>
        },
        {
          link: "https://lk.mai.ru/",
          content: <>Личный кабинет</>
        },
        {
          link: "https://sfmai.ru/abitur/pano",
          content: <>Виртуальный тур</>
        }
      ]
    }
  ];

  const Menu = ({ title, items }) => {
    return (
      <div className='flex flex-col gap-y-7'>
        <span className='text-3xl font-bold leading-snug text-blue dark:text-white'>{title}</span>
        <div className='flex flex-col font-medium text-1.5xl leading-snug text-blue dark:text-white gap-y-4'>
          {items.map((x) => <a href={`${x.link}`}>{x.content}</a>)}
        </div>
      </div>
    )
  };

  return (
    <div className='pt-20 flex flex-col items-center'>
      <div className='flex flex-col gap-y-10 max-w-[1400px] 1.5xl:px-24 w-full xxs:px-8'>
        <div className='grid grid-cols-2 s:flex s:flex-col s:gap-y-10'>
          <div className='grid grid-cols-2 xxxs:flex xxxs:flex-col xxxs:gap-10'>
            {Menus.map(x => <Menu {...x} />)}
          </div>
          <div className='flex flex-row gap-x-10 justify-between'>
            <div className='flex flex-col gap-y-3'>
              <span className='text-4xl font-bold leading-snug text-blue dark:text-white'>Наши контакты</span>
              <div className='flex flex-col gap-y-4 text-blue dark:text-white'>
                <span className='text-2xl font-medium leading-normal '>Адрес: Московская область, <br />г.Ступино, ул.Пристанционная д.4</span>
                <span className='text-2xl font-medium leading-normal xxs:hidden'>Приемная комиссия: 8 (496) 641-16-30</span>
              </div>
            </div>
            <Logo className={`text-blue dark:text-white w-32 h-32 aspect-square s:w-20 s:h-20`} />
          </div>
        </div>
        <div className='xxs:flex flex-row minxxs:hidden xxs:justify-between xxs:w-full text-blue dark:text-white items-center'>
          <span className='text-2xl font-medium leading-normal xxs:visible '>Приемная комиссия: <br /> 8 (496) 641-16-30</span>
          <a href="https://vk.com/sf_mai" className='mr-4'>
            <Vk className={`text-blue dark:text-white h-16 w-16 s:w-16 s:h-16`} />
          </a>
        </div>
        <div className='border-t-2 border-blue-200 dark:border-white-200 py-4 px-8 flex flex-row justify-between items-center s:px-0 xxs:flex-col'>
          <span className='font-medium text-2xl leading-normal text-blue dark:text-white xxs:hidden'>© 2023. Ступинский филиал МАИ. Все права защищены.</span>
          <span className='font-medium text-2xl leading-normal text-blue dark:text-white xxs:visible text-center xxs:flex minxxs:hidden xxxs:text-xl'>© 2023. Ступинский филиал МАИ. <br /> Все права защищены.</span>
          <a href="https://vk.com/sf_mai" className='xxs:hidden'>
            <Vk className={`text-blue dark:text-white h-16 w-16 s:w-12 s:h-12`} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer