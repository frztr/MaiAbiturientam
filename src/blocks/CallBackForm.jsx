import React from 'react'
import Input from '../shared/Input';

const CallBackForm = () => {
  return (
    <div className='py-28 s:py-14 flex flex-col items-center'>
      <form className=' overflow-hidden max-w-[1400px] flex flex-col w-full rounded-2.5xl 1.5xl:max-w-[1200px] p-16 gap-y-8 bg-gradient-to-b from-lightblue-300 dark:from-black-300 to-lightblue dark:to-black relative s:rounded-none'>
        <span className='text-blue dark:text-white text-5xl font-bold leading-snug xxs:text-3xl'>Остались вопросы? <br />Мы свяжемся с Вами</span>
        <div className='flex flex-col gap-y-5 w-1/2 xxs:w-full'>
          <Input type="text" placeholder={'Фамилия, имя, отчество'} required/>
          <Input type="tel" placeholder={'Телефон'} required/>
          <Input type="email" placeholder={'Эл. почта'} required/>
        </div>
        <input type="submit" value="Отправить" className='xxs:w-full text-2xl font-semibold leading-snug text-blue dark:text-white bg-lightblue-300 dark:bg-black-300 shadow-blue dark:shadow-transparent shadow-md cursor-pointer w-fit py-5 px-8 rounded-lg' />
        <img src={require('../resources/formback.png')} className=' w-2/5 aspect-square right-0 bottom-0 absolute xxs:hidden' alt="" srcSet="" />
      </form>
    </div>
  )
}

export default CallBackForm