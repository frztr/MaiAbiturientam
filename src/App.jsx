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

function App() {

  return (
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
      <div className='flex flex-col bg-gradient-to-t from-lightblue-300 to-white dark:from-black-300 to-black'>
        <CallBackForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
