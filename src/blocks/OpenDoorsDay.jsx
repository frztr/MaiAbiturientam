import React from 'react'

const OpenDoorsDay = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='mx-16 my-16 flex flex-col relative xl:mx-0'>
        <div className='flex flex-col rounded-2.5xl bg-gradient-to-b from-lightblue to-lightblue-250 dark:from-black dark:to-black-250 py-28 px-20 xxs:py-8 xxs:px-8 xl:rounded-none'>
          <div className='flex flex-col gap-y-16 z-10'>
            <div className='flex flex-col gap-y-10'>
              <span className="text-blue dark:text-white font-bold  text-7xl xxs:text-5xl ">День открытых дверей</span>
              <span className=' text-blue dark:text-white font-medium text-4.5xl xxs:text-3xl'>
                15 апреля 2024 года Ступинский <br /> филиал МАИ  приглашает будущих <br /> абитуриентов.
              </span>
            </div>
            <button className='xxs:w-full xxs:text-3xl py-6 px-7 text-blue dark:text-white font-semibold text-4xl border-3 border-blue dark:border-white w-fit rounded-md hover:bg-blue hover:text-white dark:hover:bg-white dark:hover:text-black transition-all '>
              Узнать подробности
            </button>
          </div>
        </div>
        <div className='absolute h-full w-1/2 xl:w-2/5 xl:h-auto right-0 flex flex-col bottom-0 xxs:hidden'>
          <img src={require('../resources/opendoorsback.png')} className='h-full object-cover ' alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default OpenDoorsDay