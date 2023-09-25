import React from 'react'
import {Museum,Books,Troops,GraduatorHat} from '../icons';

const WhyUsBlock = () => {

  const imageprops = {
    className:'text-blue dark:text-white w-28 h-28 aspect-square object-cover s: w-20 h-20 '
  };

  const Points = [
    {
      image: <Museum {...imageprops}/>,
      text: <>Филиал престижного <br /> Московского ВУЗа.</>
    },
    {
      image: <Books {...imageprops}/>,
      text: <>Подготовительные курсы</>
    },
    {
      image: <Troops {...imageprops}/>,
      text: <>Военная кафедра</>
    },
    {
      image: <GraduatorHat {...imageprops}/>,
      text: <>Возможность <br /> трудоустройства <br />
        в компании - партнёры</>
    }
  ];

  const Point = ({ image, text }) => {
    return (
      <div className='flex flex-col gap-y-5 items-center'>
        {image}
        <span className='font-semibold text-3xl text-blue dark:text-white text-center s:text-xl xxs:text-2xl'>{text}</span>
      </div>
    );
  }

  return (
    <div className='py-28 px-16 flex flex-col gap-y-24 items-center s:px-8'>
      <span className='font-bold text-6xl text-blue dark:text-white'>Почему СФ МАИ</span>
      <div className='flex flex-row justify-between w-full xxs:flex-col xxs:gap-20'>
        {Points.map((x)=>(<Point image={x.image} text={x.text} />))}
      </div>
    </div>
  )
}

export default WhyUsBlock