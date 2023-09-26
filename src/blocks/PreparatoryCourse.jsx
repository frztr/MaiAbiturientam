import React, { useCallback } from 'react'

const PreparatoryCourse = () => {
  const props = {
    className: 'bg-blue dark:bg-white text-white dark:text-black py-4 px-6 rounded-lg font-semibold text-3xl xl:text-2xl'
  };

  const Point = useCallback(({ number, text }) => (
    <div className='flex flex-row gap-x-5 text-blue dark:text-white items-center'>
      <span className='font-bold text-7xl xl:text-5xl'>
        {number}
      </span>
      <span className='font-medium text-2xl'>
        {text}
      </span>
    </div>
  ), []);

  return (
    <div className='p-28 xl:p-16 flex flex-col relative overflow-hidden bg-gradient-67 from-white to-lightblue-250 dark:from-black dark:to-black-250'>
      <img src={require(`../resources/prepareImage.png`)} className=' absolute right-0 bottom-0 w-1/2 h-full 1.5xl:object-cover 1.5xl:h-auto xxs:hidden ' alt="" srcSet="" />
      <div className='flex flex-col gap-y-8 w-3/5 xl:w-4/5 xxs:w-full'>
        <span className='text-6xl font-bold leading-snug first-letter text-blue dark:text-white xxs:text-5xl xxxs:text-4xl'>Подготовительные курсы МАИ</span>
        <span className='text-blue dark:text-white text-3xl font-medium xl:text-2xl xl:max-w-[80%] xxs:text-xl'>Ступинский филиал МАИ объявляет набор на подготовительные курсы для подготовки к сдаче экзаменов в форме ЕГЭ и участия в олимпиадах.</span>
        <div className='flex flex-row gap-4 xxs:flex-wrap w-fit'>
          <button {...props}>Математика</button>
          <button {...props}>Физика</button>
          <button {...props}>Русский язык</button>
        </div>
        <div className='flex flex-row gap-16 xxs:flex-wrap xxs:gap-4'>
          <Point number={3} text={<>академических <br /> часа в неделю</>} />
          <Point number={3600} text={<>рублей <br />в месяц</>} />
        </div>
        <button className='xxs:w-full xl:text-3xl bg-lightblue-300 dark:bg-black-300 text-blue dark:text-white font-semibold text-4xl rounded-lg py-6 px-9 w-fit hover:bg-blue dark:hover:bg-white hover:text-white dark:hover:text-black transition-all'>
          Подробнее
        </button>
      </div>
    </div>
  )
}

export default PreparatoryCourse