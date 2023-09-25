import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Arrow } from '../icons';

const OurGraduators = () => {

  const [gradblink, setgradblink] = useState(false);
  const [pageblink, setpageblink] = useState(false);

  const [graduatorIndex, setgraduatorIndex] = useState(0);
  const Graduators = [
    {
      LNM: "Кононов Сергей Александрович",
      image: "Kononov.jpg",
      desc: <>
        Главный металлург, технический директор АО «Ступинская металлургическая компания», директор по развитию АО «Электросталь».
        <br /> Имеет 8 патентов и авторских свидетельств на изобретения, публикации в научно-технических журналах.
      </>,
      biography: <>
        Родился 24 июня 1962 в Московской области. В 1984 с отличием окончил Ступинский филиал МАТИ и начал работать на Ступинском металлургическом комбинате, занимал руководящие посты — главный металлург, технический директор.
        <br /><br />
        В 2007–2015 — директор по освоению новых технологий, в 2015–2018 — директор по развитию АО «Электросталь». С 2018 — заместитель генерального директора — директора по техническому развитию АО «Ступинская металлургическая компания».
        <br /><br />
        Кандидат технических наук (2001).
      </>,
      achievments: <>
        Отмечен знаком Московской областной Думы «За труды» (2019).
      </>
    },
    {
      LNM: "Поляков Анатолий Григорьевич",
      image: "Polyakov.jpg",
      desc: <>
        Генеральный директор, председатель совета директоров АО «Ступинское машиностроительное производственное предприятие».
      </>,
      biography: <>
        Родился 20 ноября 1948. В 1978 окончил Ступинский филиал МАТИ. В 1979–1984 — начальник цеха, в 1984–1987 — начальник производства, в 1987–1991 — заместитель главного инженера по производству, в 1991–1999 — заместитель генерального директора, с 1999 — генеральный директор и председатель совета директоров, с 2008 — управляющий директор АО «Ступинское машиностроительное производственное предприятие».
      </>
    },
    {
      LNM: "Шатланов Михаил Иванович",
      image: "SHatlanov.jpeg",
      desc: <>
        Главный конструктор АО НПП «Аэросила».
        <br /><br />
        Под его руководством и при его личном участии были разработаны композитные лопасти для воздушных винтов и винтовентиляторов СВ-34, АВ-140, СВ-92 и СВ-27 для силовой установки самолёта Ан-70.
      </>,
      biography: <>
        Родился в 1945. В 1968 окончил авиационно-металлургический техникум и начал работать в ОКБ СМПО, в 1974 окончил Ступинский филиал МАТИ. С 1987 — заместитель главного конструктора, затем — главный конструктор воздушными винтам и винтовым преобразователям и заместитель генерального директора НПП «Аэросила». Скончался 24 июня 2016.
      </>,
      achievments: <>
        Почётный авиастроитель, изобретатель СССР.
        <br /><br />
        Награждён орденом Почёта (1998), медалями и другими наградами.
        <br /><br />
        Лауреат премий АССАД им. А. М. Люльки и им. К. И. Жданова.
      </>
    },
    {
      LNM: "Шмелёв Виталий Петрович",
      image: "shmelev1.jpg",
      desc: <>
        Генеральный директор АО «Ступинская металлургическая компания».
      </>,
      biography: <>
        Окончил Ступинский филиал МАТИ, после чего работал в Ступинской металлургической компании. В 2017–2018 — генеральный директор АО «Управляющая компания СМК», с 2017 — генеральный директор СМК-Финанс», с 2018 — генеральный директор АО «Ступинская металлургическая компания».
      </>
    }
  ];

  const pages = ["Биография", "Достижения"];
  const [tabpage, settabpage] = useState(0);

  const getpagecontent = useCallback((pageIndex, graduatorIndex) => {
    switch (pageIndex) {
      case 0: return Graduators[graduatorIndex].biography;
      case 1: return Graduators[graduatorIndex].achievments;
      default: return null;
    }
  }, []);

  return (
    <div className='flex flex-col w-full py-16 items-center transition-all'>
      <div className='max-w-[1400px]  w-full flex flex-col gap-y-16'>
        <span className='font-bold 1.5xl:ml-24 text-6xl text-blue dark:text-white xxs:w-full xxs:ml-0 xxs:text-center'>
          Наши выпускники
        </span>
        <div className={`flex flex-col bg-lightblue-300 dark:bg-black-300 p-16 rounded-xl 1.5xl:rounded-none transition-all ${gradblink ? 'opacity-0' : 'opacity-100'}`}>
          <div className='flex flex-col gap-y-16'>
            <div className='flex flex-row gap-10 items-center xxs:flex-col'>
              <div className='overflow-hidden w-28 h-28 rounded-full aspect-square'>
                <img className='w-full' src={require(`../resources/${Graduators[graduatorIndex].image}`)} alt="" srcset="" />
              </div>
              <div className='flex flex-col gap-y-3 text-blue dark:text-white flex-1 xxs:gap-y-8'>
                <span className='font-bold text-4xl xxs:text-center'>{Graduators[graduatorIndex].LNM}</span>
                <span className='font-medium text-2xl'>{Graduators[graduatorIndex].desc}
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-y-11'>
              <div className='flex flex-row gap-x-7 items-start'>
                {pages.map((x, i) => {
                  if (getpagecontent(i, graduatorIndex) != null)
                    return (<div className={`${i == tabpage ? 'border-blue dark:border-white' : 'border-transparent'}  border-b-6 pb-2 transition-all`}>
                      <button className={`text-blue dark:text-white  text-3xl font-semibold`} onClick={() => {
                        setTimeout(() => {
                          settabpage(i);
                          setpageblink(false)
                        }, 300);
                        setpageblink(true);
                      }}>
                        {x}
                      </button></div>)
                  else return null;
                }
                )
                }
              </div>
              <span className={`text-2xl text-blue dark:text-white font-medium transition-all ${pageblink ? 'opacity-0' : 'opacity-100'}`}>
                {getpagecontent(tabpage, graduatorIndex)}
              </span>
            </div>
          </div>
          <div className='flex flex-row gap-x-4 self-end  xxs:mt-4 '>
            <button className=' rounded-2.5xl w-18 aspect-square flex flex-col items-center justify-center bg-white text-blue hover:bg-blue hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black transition-all' onClick={() => {
              if (graduatorIndex > 0) {
                setTimeout(() => {
                  setgraduatorIndex(graduatorIndex - 1);
                  setgradblink(false);
                }, 300);                
                setgradblink(true);
              }
            }}><Arrow className={`text-inherit`} /></button>
            <button className=' rounded-2.5xl w-18 aspect-square flex flex-col items-center justify-center bg-white text-blue hover:bg-blue hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black transition-all' onClick={() => {
              if (graduatorIndex < Graduators.length - 1) {
                setTimeout(() => {
                  setgraduatorIndex(graduatorIndex + 1);
                  setgradblink(false);
                }, 300);                
                setgradblink(true);
              }
            }}><Arrow className={`text-inherit rotate-180`} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurGraduators