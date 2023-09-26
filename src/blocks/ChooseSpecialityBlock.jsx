import React, { useCallback, useState } from 'react'

const ChooseSpecialityBlock = () => {
  const [blink, setblink] = useState(false);
  const [currentSpeciality, setcurrentSpeciality] = useState(1);
  const Specialities = [
    {
      title: "Менеджмент",
      image: "Management.jpg",
      budgetplace: 0,
      paidplace: 60,
      priceIntramural: 167,
      priceDistant: 68
    },
    {
      title: "Информатика",
      image: "it.png",
      budgetplace: 15,
      paidplace: 35,
      priceIntramural: 190,
      priceDistant: 69
    },
    {
      title: "Автоматизация",
      image: "Autom.jpg",
      budgetplace: 10,
      paidplace: 15,
      priceIntramural: 190,
      priceDistant: 0
    },
    {
      title: "Материаловедение",
      image: "Material.jpg",
      budgetplace: 10,
      paidplace: 15,
      priceIntramural: 190,
      priceDistant: 0
    },
    {
      title: "Двигателестроение",
      image: "Engine.jpg",
      budgetplace: 20,
      paidplace: 35,
      priceIntramural: 223,
      priceDistant: 69
    }
  ];

  const StatPoint = useCallback(({ className, number, text }) => {
    return (
      <div className={`flex gap-x-5 gap-y-3 text-blue dark:text-white ${className} s:justify-center s:items-center`}>
        <span className='text-6xl font-bold leading-tight s:text-5xl'>{number}</span>
        <span className='text-2xl font-medium leading-tight s:text-xl'>{text}</span>
      </div>
    )
  }, []);

  const ToggleButton = useCallback(({ className, onclick, children, active = false, ...otherprops }) => {
    const states = {
      true: 'bg-blue text-white dark:bg-white dark:text-black',
      false: 'bg-white text-blue hover:text-white hover:bg-blue dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
    };
    return (
      <button className={`flex py-5 px-7 border-blue dark:border-white border-2 rounded text-2xl font-semibold ${className != null && className} ${states[active]} transition-all`}
        onClick={() => {
          setTimeout(() => {
            onclick != null && onclick();
            setblink(false);
          }, 300);
          setblink(true);
        }}
        {...otherprops}>
        {children}
      </button>
    );
  }, []);

  return (
    <div className='py-16 pb-28 flex flex-col pr-7'>
      <div className='ml-64 xl:ml-16 1.5xl:ml-24  flex flex-row gap-x-10 items-end xl:items-start'>
        <div className='flex flex-col gap-y-20 max-w-200 xl:max-w-[50%] s:max-w-full s:w-full'>
          <div className='flex flex-col gap-y-10 s:items-center'>
            <span className='text-6xl text-blue dark:text-white font-bold'>Выбери свою профессию</span>
            <div className='flex flex-wrap gap-7 s:justify-center xxs:flex-col xxs:items-start xxs:w-full'>
              {Specialities.map((x, i) => (
                <ToggleButton active={i == currentSpeciality} key={i} onclick={() => {
                  setcurrentSpeciality(i);
                }}>{x.title}</ToggleButton>
              ))}
            </div>
          </div>
          <div className={`flex flex-col mr-12 gap-y-7 ${blink ? 'opacity-0' : 'opacity-100'} transition-all mins:visible s:hidden`}>
            <div className='grid grid-cols-2'>
              {Specialities[currentSpeciality].budgetplace != 0 && <StatPoint number={Specialities[currentSpeciality].budgetplace} text={<>бюджетных<br />мест</>} className={`flex-row items-center`} />}
              {Specialities[currentSpeciality].paidplace != 0 && <StatPoint number={Specialities[currentSpeciality].paidplace} text={<>платных<br />мест</>} className={`flex-row items-center`} />}
            </div>
            <div className='grid grid-cols-2'>
              {Specialities[currentSpeciality].priceIntramural != 0 && <StatPoint number={<>{Specialities[currentSpeciality].priceIntramural} <span className='text-3xl font-medium'>тыс. ₽</span></>} className={`flex-col items-start`} text={<>очное обучение</>} />}
              {Specialities[currentSpeciality].priceDistant != 0 && <StatPoint number={<>{Specialities[currentSpeciality].priceDistant} <span className='text-3xl font-medium'>тыс. ₽</span></>} className={`flex-col items-start`} text={<>очно-заочное обучение</>} />}
            </div>
          </div>
          <div className={`hidden flex-row justify-center gap-7 ${blink ? 'opacity-0' : 'opacity-100'} transition-all s:flex minxs:flex-row xxs:flex-wrap xxs:gap-14 flex-wrap `}>
            {Specialities[currentSpeciality].budgetplace != 0 && <StatPoint number={Specialities[currentSpeciality].budgetplace} text={<>бюджетных<br />мест</>} className={`flex-row items-center`} />}
            {Specialities[currentSpeciality].paidplace != 0 && <StatPoint number={Specialities[currentSpeciality].paidplace} text={<>платных<br />мест</>} className={`flex-row items-center`} />}
            {Specialities[currentSpeciality].priceIntramural != 0 && <StatPoint number={<>{Specialities[currentSpeciality].priceIntramural} <span className='text-3xl font-medium'>тыс. ₽</span></>} className={`flex-col items-start`} text={<>очное обучение</>} />}
            {Specialities[currentSpeciality].priceDistant != 0 && <StatPoint number={<>{Specialities[currentSpeciality].priceDistant} <span className='text-3xl font-medium'>тыс. ₽</span></>} className={`flex-col items-start`} text={<>очно-заочное обучение</>} />}
          </div>
        </div>
        <div className={`flex flex-col  relative xl:w-full top-0 xl:sticky s:hidden`}>
          <div className='w-165 h-130 xl:hidden bg-lightblue-300 dark:bg-black-300 absolute rounded-2.5xl -translate-y-24 translate-x-24  shadow-lightblue-50 dark:shadow-black-50 shadow-3xl' />
          <div className='w-165 h-130 xl:hidden bg-lightblue-300 dark:bg-black-300 absolute rounded-2.5xl -translate-y-12 translate-x-12 z-10 shadow-lightblue-50 dark:shadow-black-50 shadow-3xl' />
          <img className={`w-165 h-130 xl:h-full object-cover rounded-2.5xl  z-20 ${blink ? 'opacity-0' : 'opacity-100'} transition-all shadow-lightblue-50 dark:shadow-black-50 shadow-2xl`} src={require(`../resources/${Specialities[currentSpeciality].image}`)} alt="" />
        </div>
      </div>
    </div>
  )
}



export default ChooseSpecialityBlock