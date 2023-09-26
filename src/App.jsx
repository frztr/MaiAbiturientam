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
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

function App() {

  const [dark, setdark] = useState(null);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    var theme = document.cookie.split(";").filter(x => x.match("theme"));
    switch (theme[0]) {
      case "theme:dark":
        setdark(true);
        document.querySelector('html').classList.add("dark");
        break;
      case "theme:light":
        setdark(false);
        document.querySelector('html').classList.remove("dark");
        break;
      default:
        setdark(false);
        document.querySelector('html').classList.remove("dark");
        break;
    }
    setloaded(true);
  }, []);

  return (
    loaded && <ThemeContext.Provider value={{ dark, setdark }}>
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

export { App, ThemeContext };
