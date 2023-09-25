import React, { useRef, useState } from 'react'
import Select from '../shared/Select';

const EvaluateYourCapabilities = () => {
  const SubjList =
    [
      {
        name: "Информатика",
        min: 44
      },
      {
        name: "Физика",
        min: 39
      },
      {
        name: "Обществознание",
        min: 45
      }
    ];

  const Faculties = [
    {
      name: <>Информатика <br />и вычислительная техника</>,
      min: 216,
      subjects: ["Информатика", "Физика"]
    },
    {
      name: <>Автоматизация технологических <br />процессов и производств</>,
      min: 203,
      subjects: ["Информатика", "Физика"]
    },
    {
      name: <>Двигатели <br />летательных аппаратов</>,
      min: 170,
      subjects: ["Информатика", "Физика"]
    },
    {
      name: <>Материаловедение <br />и технологии материалов</>,
      min: 177,
      subjects: ["Информатика", "Физика"]
    },
    {
      name: <>Менеджмент</>,
      min: 162,
      subjects: ["Информатика", "Обществознание"]
    }
  ];

  const Subj = ({ name, min, readonly = 0, className }) => {
    const styles = [
      {
        sidecolor: 'blue',
        maincolor: 'white',
        darksidecolor: 'white',
        darkmaincolor: 'black'
      },
      {
        sidecolor: 'white',
        maincolor: 'blue',
        darksidecolor: 'black',
        darkmaincolor: 'white'
      }
    ];
    return (
      <div className={`py-3 px-4 flex flex-row gap-x-2.5 rounded bg-${styles[readonly].maincolor} dark:bg-${styles[readonly].darkmaincolor} items-center w-full ${className}`}>
        <span className={`text-${styles[readonly].sidecolor} dark:text-${styles[readonly].darksidecolor} font-semibold text-1.5xl w-full text-center xl:text-2xl`}>{name}</span>
        <div className='flex flex-row gap-x-1.5 font-semibold leading-snug items-center xl:flex-wrap justify-center'>
          <span className={`text-${styles[readonly].sidecolor} dark:text-${styles[readonly].darksidecolor} xl:text-xl  `}>от</span>
          <div className={`bg-${styles[readonly].sidecolor} dark:bg-${styles[readonly].darksidecolor} rounded-full aspect-square text-${styles[readonly].maincolor} dark:text-${styles[readonly].darkmaincolor} w-10 h-10 xl:w-12 xl:h-12 flex flex-col items-center justify-center`}>
            <span className='xl:text-xl'>{min}</span>
          </div>
          <span className={`text-${styles[readonly].sidecolor} dark:text-${styles[readonly].darksidecolor} xl:text-xl`}>баллов</span>
        </div>
      </div>
    )
  }

  const Facult = ({ name, min }) => (
    <div className='flex flex-row p-4 gap-x-4 border-2 rounded border-blue dark:border-white items-center h-fit xxs:w-full xxs:justify-between'>
      <span className='font-semibold text-xl leading-snug text-blue dark:text-white text-center xxs:flex-1'>{name}</span>
      <div className='flex flex-col items-center justify-center bg-blue dark:bg-white rounded-full w-16 h-16 text-white dark:text-black font-semibold text-xl leading-snug'>
        {min}
      </div>
    </div>
  );

  const [otherSubj, setOtherSubj] = useState(0);
  const [height, setheight] = useState('auto');
  const cont = useRef();

  return (
    <>
      <div className='py-28 w-full flex flex-col items-center ' >
        <div className='max-w-[1400px] 1.5xl:max-w-[1200px] flex flex-col gap-y-16'>
          <div className='flex flex-col gap-y-8 items-center xxs:px-8'>
            <div className='flex flex-col gap-y-2 leading-snug text-blue dark:text-white items-center'>
              <span className='font-bold text-6xl xxs:text-center'>Оцени свои возможности</span>
              <span className='font-semibold text-3xl xxs:text-center'>Выбери специальность по экзаменам</span>
            </div>
            <div className='grid grid-cols-3 gap-x-4 w-fit s:flex s:flex-col s:gap-y-4'>
              <Subj className={`w-92 s:w-full`} name={`Математика`} min={39} readonly={1} />
              <Subj className={`w-92 s:w-full`} name={`Русский язык`} min={40} readonly={1} />
              <Select className={`w-92 s:w-full`} onSelectedItemChanged={(i) => {
                setOtherSubj(i);
              }}>
                {SubjList.map(x => <Subj {...x} />)}
              </Select>
              {cont.current != null && height != cont.current.scrollHeight && setheight(cont.current.scrollHeight)}
            </div>
          </div>
          <div className='flex flex-col gap-y-4 '>
            <span className='font-semibold text-3xl text-blue dark:text-white text-center'>Проходной балл 2023 года на подходящие направления</span>
            <div className='flex flex-row flex-wrap gap-4 justify-center transition-all xxs:px-8' ref={cont} style={{ height: height }}>
              {Faculties.map(x => { if (x.subjects.includes(SubjList[otherSubj].name)) return <Facult name={x.name} min={x.min} /> })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EvaluateYourCapabilities