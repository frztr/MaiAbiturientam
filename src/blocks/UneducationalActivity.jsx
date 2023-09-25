import React, { useCallback, useState } from 'react'

const UneducationalActivity = () => {
  const Links = [
    {
      image: "science.png",
      text: "НАУКА",
      link: "science.html"
    },
    {
      image: "sport.png",
      text: "СПОРТ",
      link: "sport.html"
    },
    {
      image: "volonteer.png",
      text: "ВОЛОНТЁРСТВО",
      link: "volonteer.html"
    },
    {
      image: "eco.png",
      text: "ЭКОСТУПИНО",
      link: "eco.html"
    }
  ];

  return (
    <div className='flex flex-col py-28 px-20 items-center gap-y-28 s:px-8'>
      <span className='text-blue dark:text-white w-full text-left font-bold text-6xl leading-snug max-w-[1400px] xxs:text-5xl'>Прими активное участие в жизни ВУЗа</span>
      <div className='grid grid-cols-2 gap-16 w-full xxs:flex xxs:flex-col'>
        {Links.map((x, i) =>
          <_Link image={x.image} text={x.text} link={x.link} key={i} />)}
      </div>
    </div>
  )
}

const _Link = ({ image, text, link }) => {
  const [hover, sethover] = useState(false);
  return (
    <a href={`${link}`} className='flex flex-col w-full aspect-[3/2] href_tile relative overflow-hidden' onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)}>
      <div className='flex flex-col w-full h-full  items-start justify-end p-16 smooth_transition' style={
        {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${require(`../resources/${image}`)}), lightgray 50% / cover no-repeat`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: hover ? '110% 110%' :'100% 100%',
          backgroundPosition: 'center'
        }
        
        }>
        <span className=' text-5xl leading-snug text-white uppercase xl:text-4xl'>{text}</span>
      </div>
    </a>
  )
};

export default UneducationalActivity