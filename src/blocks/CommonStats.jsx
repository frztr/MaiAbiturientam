import React from 'react'
import Stat from '../shared/StatPoint';

const CommonStats = () => {
  return (
    <div className='flex flex-row gap-16 px-20 py-56 xxs:flex-col xxs:py-28 xxxs:px-12'>
      <Stat className={`flex-1`} maintext={'4.35'} sidetext={<>Средняя оценка обучения <br /> согласно отзывам в различных <br /> интернет-ресурсах</>} />
      <Stat className={`flex-1`} maintext={'>85%'} sidetext={<>студентов нашли работу <br />вовремя и по окончании обучения</>} />
      <Stat className={`flex-1`} maintext={'30+'} sidetext={<>крупных компаний в которых <br /> работают выпускники нашего <br /> филиала</>} />
    </div>
  )
}

export default CommonStats