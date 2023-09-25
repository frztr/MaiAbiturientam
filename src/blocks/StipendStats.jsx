import React from 'react'
import Stat from '../shared/StatPoint';

const StipendStats = () => {
  return (
    <div className='flex flex-row gap-16 px-20 py-28 1.5xl:px-0 flex-wrap justify-center'>
      <Stat className={`w-120`} maintext={'1975 ₽'} sidetext={<>Стипендия в первом семестре</>} />
      <Stat className={` w-120`} maintext={'6770 ₽'} sidetext={<>Стипендия в первом семестре<br /> при сдаче ЕГЭ на 250-290 баллов</>} />
      <Stat className={` w-120`} maintext={'10 000 ₽'} sidetext={<>Стипендия в первом семестре<br /> при сдаче ЕГЭ на 291+ баллов</>} />
      <Stat className={` w-120`} maintext={'4500-5500 ₽'} sidetext={<>Стипендия за <br />хорошую/отличную<br /> успеваемость</>} />
      <Stat className={` w-120`} maintext={'6530 ₽'} sidetext={<>Повышенная стипендия за достижения в учёбе, науке, спорте, культурно-творческой и общественной деятельности</>} />
    </div>
  )
}

export default StipendStats