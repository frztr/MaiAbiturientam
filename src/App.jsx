import logo from './logo.svg';
import './App.css';
import {
  Header,
  ChooseSpecialityBlock,
  WhyUsBlock,
  OpenDoorsDay,
  OurGraduators,
  OurPartners,
  PreparatoryCourse,
  CommonStats,
  UneducationalActivity,
  StipendStats,
  HowToJoin,
  EvaluateYourCapabilities,
  OftenQuestions,
  CallBackForm,
  Footer
} from "./blocks";
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function App() {
  
  const [dark,setdark] = useState(false);
  return (
    <ThemeContext.Provider value={{dark,setdark}}>
    <div className='flex flex-col bg-white dark:bg-black'>
      <Header />
      <ChooseSpecialityBlock />
      <WhyUsBlock />
      <OpenDoorsDay />
      <OurGraduators />
      <OurPartners />
      <PreparatoryCourse />
      <CommonStats />
      <UneducationalActivity />
      <StipendStats />
      <HowToJoin />
      <EvaluateYourCapabilities />
      <OftenQuestions />
      <div className='flex flex-col bg-gradient-to-t from-lightblue-300 to-white dark:from-black-300 dark:to-black'>
        <CallBackForm />
        <Footer />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export {App,ThemeContext };
