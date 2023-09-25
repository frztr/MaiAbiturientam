import React from 'react'
import Dropdown from '../shared/Dropdown';

const OftenQuestions = () => {
  const Questions =
    [
      {
        title: <>Как поступить в вуз?</>,
        content: <span className='text-blue dark:text-white'>Прием на обучение в вуз по программам бакалавриата ведется на основании конкурса результатов ЕГЭ.
          <br /><br />
          Вся необходимая информация размещается на официальном сайте и информационных стендах приемной комиссии вуза, в том числе правила, специальности, условия и сроки приема, минимальное количество баллов, правила подачи и рассмотрения апелляций и другая информация. Подайте документы в выбранный вуз на одно или несколько выбранных направлений обучения.
          <br /><br />
          Точные даты начала и окончания приемной кампании, условия приема, а также количество вузов и направлений обучения, на которые абитуриент может одновременно подать заявление, ежегодно устанавливаются в Порядке приема на обучение по образовательным программам высшего образования.
        </span>
      },
      {
        title: <>Какие документы требуются для поступления в вуз?</>,
        content: <span className='text-blue dark:text-white'>
          Для поступления в вуз потребуется пакет документов:
          <br /><br />
          <ul className='gap-y-3 flex flex-col'>
            <li className=' list-disc list-inside'>заявление и согласие на обработку персональных данных;</li>
            <li className=' list-disc list-inside'>паспорт (документ, удостоверяющий личность и гражданство);</li>
            <li className=' list-disc list-inside'>копия паспорта;</li>
            <li className=' list-disc list-inside'>СНИЛС;</li>
            <li className=' list-disc list-inside'>аттестат или диплом (оригинал или ксерокопию документа об образовании);</li>
            <li className=' list-disc list-inside'>шесть фотографий 3x4 см (черно-белые или цветные);</li>
            <li className=' list-disc list-inside'>если есть: документы, подтверждающие наличие особых прав, индивидуальных достижений, победы в олимпиадах или другие документы, влияющие на порядок поступления;</li>
            <li className=' list-disc list-inside'>иные документы на ваше усмотрение.</li>
          </ul>
        </span>
      },
      {
        title: <>Имеет ли значение дата подачи документов при равных баллах ЕГЭ?</>,
        content: <span className='text-blue  dark:text-white'>Нет. Значения это не имеет. Главное - придерживаться сроков подачи документов и обращать внимание на минимальные значения результатов ЕГЭ, установленные в вузе.
        </span>
      },
      ,
      {
        title: <>Где и когда можно узнать проходные баллы в текущем году?</>,
        content: <span className='text-blue dark:text-white'>Проходной балл определяется только по завершению срока подачи документов и конкурсной ситуации текущего года. Вам необходимо самостоятельно отслеживать конкурсную ситуацию на данном сайте и оценивать свои шансы.
        </span>
      },
      ,
      {
        title: <>Сколько необходимо набрать баллов, чтобы поступить на бюджетное место на какой-либо из факультетов Вашего университета?</>,
        content: <span className='text-blue dark:text-white'>Фактический проходной балл "складывается" после окончания приема заявлений и формированию рейтинговых списков. Отслеживать эти данные Вы сможете на нашем сайте самостоятельно и оценивать свои шансы быть зачисленными в состав обучающихся в университете.
        </span>
      },
      ,
      {
        title: <>Какие минимальные баллы ЕГЭ для поступления на контракт (платное обучение)?</>,
        content: <span className='text-blue dark:text-white'>Минимальные баллы результатов ЕГЭ одинаковы и для поступающих на места, финансируемые за счет бюджетных ассигнований федерального бюджета, и для поступающих на места по договорам об образовании за счет средств физических и (или) юридических лиц.
        </span>
      },
      ,
      {
        title: <>Возможно ли перевестись с контрактного обучения на бюджетное?</>,
        content: <span className='text-blue dark:text-white'>Да, можете. Но необходимо сдать две сессии на "хорошо" и "отлично", собрать пакет документов и написать заявление в деканате того факультета, в рамках которого Вы обучаетесь. Обращаем внимание, что сроки ограничены. Подробную информацию можете получить у работников деканата.
        </span>
      },
      ,
      {
        title: <>Какие вступительные испытания могут проводиться в вузе?</>,
        content: <span className='text-blue dark:text-white'>
          Прием на обучение в вузы проводится на основании результатов единого государственного экзамена (ЕГЭ). Результаты ЕГЭ засчитываются одновременно как итоги школьной аттестации и вступительных испытаний в учреждения высшего профессионального образования. Вузы могут проводить собственные экзамены по профильным предметам.
          <br /><br />
          Полную информацию об условиях поступления и дополнительных испытаниях можно получить на официальном сайте вуза.
        </span>
      },
      ,
      {
        title: <>Можно ли поступить в вуз без ЕГЭ?</>,
        content: <span className='text-blue dark:text-white'>
          Вы можете не сдавать ЕГЭ и поступить по результатам вступительных экзаменов, которые вуз проводит самостоятельно, если относитесь к одной из следующих категорий:
          <br /><br />
          <ul className='gap-y-3 flex flex-col'>
            <li className=' list-disc list-inside'>инвалиды и дети с инвалидностью;</li>
            <li className=' list-disc list-inside'>иностранные граждане;</li>
            <li className=' list-disc list-inside'>абитуриенты, поступающие на основании диплома о среднем или высшем профессиональном образовании.</li>
          </ul>
        </span>
      },
      ,
      {
        title: <>Какие еще есть льготы при поступлении в вуз?</>,
        content: <span className='text-blue dark:text-white'>
          Большинство льгот при поступлении можно разделить на 4 группы:
          <br /><br />
          <ul className='gap-y-3 flex flex-col'>
            <li className=' list-disc list-inside'>поступление в рамках особой квоты — поступить по особой квоте могут абитуриенты с инвалидностью I и II группы, дети с инвалидностью и инвалиды с детства, инвалиды вследствие военной травмы или заболевания, полученного в период прохождения военной службы, дети-сироты и дети, оставшиеся без попечения родителей (сохраняют право на поступление по особой квоте до 23 лет), ветераны боевых действий. В рамках особой квоты вуз выделяет не менее 10% бюджетных мест от объема контрольных цифр по каждой совокупности условий поступления на обучение по программам бакалавриата;</li>
            <li className=' list-disc list-inside'>поступление в рамках целевой квоты — абитуриентов направляет на обучение регион Российской Федерации, государственный орган или компания, с которыми у вуза заключен договор о приеме абитуриентов на целевое обучение. Уточнить, заключены ли такие соглашения в выбранном вами вузе, можно в приемной комиссии. Абитуриенты, поступающие по целевой квоте, не участвуют в общем конкурсе;</li>
            <li className=' list-disc list-inside'>льготы за индивидуальные достижения — медалисты, победители олимпиад (которых вуз не принимает без экзаменов и не предоставляет право на 100 баллов) и другие категории абитуриентов могут получить дополнительные баллы — но не более 10 — или право на преимущественное зачисление. Вуз самостоятельно определяет, за какие именно достижения и какие льготы предоставить.</li>
            <li className=' list-disc list-inside'>право преимущественного зачисления — если два абитуриента при поступлении наберут одинаковое количество баллов, то зачислят того из них, у кого есть право преимущественного зачисления. Этим правом обладают абитуриенты, которые могут поступить по особой квоте, и некоторые другие категории.</li>
          </ul>
        </span>
      },
      ,
      {
        title: <>Есть ли в университете военная кафедра?</>,
        content: <span className='text-blue dark:text-white'>
          Студенты очной формы обучения всех направлений подготовки имеют право поступать в Военный учебный центр МАИ по конкурсу. <a href="https://vuc-mai.ru/" className='font-bold'>Подробнее по ссылке.</a>
        </span>
      },
      ,
      {
        title: <>Есть ли отсрочка от службы в армии?</>,
        content: <span className='text-blue dark:text-white'>
          На основе Федерального закона "О воинской обязанности и военной службе" право на отсрочку от призыва на военную службу имеют студенты очной формы обучения на период обучения, если не воспользовались ею ранее (например, в рамках обучения в колледже/техникуме).
        </span>
      },
      ,
      {
        title: <>Обязательно ли предоставлять приписное удостоверение или военный билет при подаче документов и для зачисления на 1 курс?</>,
        content: <span className='text-blue dark:text-white'>
          Нет. С приписным удостоверением или военным билетом необходимо будет обратиться в военно-учетный стол МАИ для постановки на учет в сентябре.
        </span>
      },
      ,
      {
        title: <>Существует ли возможность перевода из других вузов в Ваш университет?</>,
        content: <span className='text-blue dark:text-white'>
          Да, конечно существует.
          <br /><br />
          Вам необходимо обратиться в деканат факультета, куда намереваетесь быть переведенными.
          <br /><br />
          Обращаем внимание, что сроки и условия перевода определены и ограничены, потому заранее уточняйте информацию о возможности перевода у работников деканата!
        </span>
      }
    ];

  return (
    <div className='p-28 flex flex-col items-center xxs:p-8'>
      <div className='flex flex-col max-w-[1400px] gap-y-16 w-full'>
        <span className='font-bold text-blue dark:text-white text-6xl xl:text-7xl xxs:text-5xl '>Часто задаваемые вопросы</span>
        <div className='flex flex-col gap-y-8 xl:text-1.5xl xxs:text-2xl'>
          {Questions.map(x => <Dropdown title={x.title}>
            {x.content}
          </Dropdown>)}
        </div>
      </div>
    </div>
  )
}

export default OftenQuestions