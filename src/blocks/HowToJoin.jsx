import React from 'react'
import { Exam, Pass, Docs } from "../icons";

const HowToJoin = () => {
  const Lists = [
    {
      icon: <Exam className={`h-18 w-18 text-white dark:text-black`} />,
      title: "Сдай ЕГЭ",
      content: <>
        Сдайте ЕГЭ или вступительные экзамены <br />
        Вступительные экзамены проводятся для:
        <ul>
          <li className='ml-5 list-disc'>лиц, не имеющих результатов ЕГЭ с СПО и высшим образованием;</li>
          <li className='ml-5 list-disc'>инвалидностью, иностранным гражданством.</li>
        </ul>
      </>
    },
    {
      icon: <Docs className={`h-18 w-18 text-white dark:text-black`} />,
      title: "Подай документы",
      content: <>
        Подать документы можно:
        <ul>
          <li className='ml-5 list-disc'>лично или через доверенное лицо;</li>
          <li className='ml-5 list-disc'>через портал Госуслуги;</li>
          <li className='ml-5 list-disc'>в личном кабинет абитуриента;</li>
          <li className='ml-5 list-disc'>через операторов почтовой связи</li>
        </ul>
      </>
    },
    {
      icon: <Pass className={`h-18 w-18 text-white dark:text-black`} />,
      title: "Пройди по конкурсу",
      content: <span className='xxs:text-center w-full inline-flex'>
        Зачисление проводится по конкурсным (ранжированным) спискам.
      </span>
    }
  ];

  const List = ({ icon, title, content }) => {
    return (
      <div className='flex flex-row gap-10 items-center xxs:flex-col'>
        <div className='w-25 h-25 bg-blue dark:bg-white p-3.5 rounded-xl'>
          {icon}
        </div>
        <div className='flex flex-col gap-y-2 xxs:gap-y-8'>
          <span className='font-bold text-4xl text-blue dark:text-white xl:text-5xl xl:leading-tight s:font-semibold xxs:text-center'>{title}</span>
          <div className='font-medium text-xl leading-snug text-blue dark:text-white xl:text-2xl xl:leading-tight s:leading-normal '>{content}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <hr className=' bg-gradient-to-r from-blue-0 to-blue dark:from-white-0 dark:to-white h-0.5' />
      <div className='flex flex-row p-28 gap-16 items-center xxs:p-10 xxs:w-full xxs:flex-col'>
        <div className='flex flex-col gap-y-16 flex-1'>
          <span className='text-6xl font-bold leading-snug text-blue dark:text-white xxs:text-center'>Хочешь к нам?</span>
          <div className='flex flex-col gap-y-10'>
            {Lists.map((x,i) => (
              <List {...x} key={i} />
            ))}
          </div>
        </div>
        <div className='flex-1 xl:flex-none'>
          <img src={require("../resources/howtojoinImage.png")}
            className='drop-shadow-3xl shadow-blue-100 dark:shadow-black-200 xl:hidden'
            alt="" srcSet=""
          />
        </div>
      </div>
      <hr className=' bg-gradient-to-l from-blue-0 to-blue dark:from-white-0 dark:to-white h-0.5' />
    </>
  )
}

export default HowToJoin