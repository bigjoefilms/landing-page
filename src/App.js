import "./App.css";
import { Card } from "./components/card/card";
import { Header } from "./components/header";
import { Testimony } from "./components/testimonies/testimonies";

function App() {
  return (
    <div><div className="App">
      <Header />
      <section className=" h-[110vh] lg:h-[80vh] flex items-center px-[20px] lg:px-[50px] flex-col lg:flex-row  ">
        <div className="flex-1 px-[30px] flex flex-col lg:items-start mt-[150px] lg:mt-[0] items-center">
          <h1 className="font-semibold  text-[27px] lg:text-[46px] lg:text-start text-center">
          Next Generation Career Services For Next Generation of Leaders
          </h1>
          <div className="lg:text-start text-center">
          Applyish is here  to transform the Career Center experience  
          aiding your team to impact students everywhere, online, disabled, Out Of State, underrepresented ETC.
          </div>
          <button className="bg-[#ecec69] max-h-[44px] h-full max-w-[150px] rounded-md mt-[10px]">
            Start Now
          </button>
        </div>

        <div className="bg-[#111111] rounded-[8px] h-[450px] w-[400px] flex-1 "></div>
      </section>
      <section className="  my-[60px] lg:my-[20px] ">
        <h1 className="font-semibold text-[27px] lg:text-[46px]">Our Products</h1>
        <Card />
      </section>
      <section className="h-[100vh] flex items-center px-[20px] lg:px-[50px] flex-col lg:flex-row  ">
        <div className="bg-[#111111] rounded-[8px] h-full max-h-[450px] w-full max-w-[400px] flex-1 "></div>
        <div className="flex-1 flex flex-col lg:text-center  lg:mt-[0] items-center justify-center ml-[0] lg:ml-[50px]">
          <h1 className="font-semibold text-[20px] lg:text-[36px] lg:text-start text-center ">
          APPLYISH  RESUME EVALUATOR

          </h1>

          <div className="lg:text-start text-center  text-[16px] lg:text-[18px] ">
          Resume Evaluator , the ultimate ATS-driven resume evaluation tool. Resume Evaluator  
          leverages advanced Applicant Tracking System (ATS) technology to meticulously analyse and optimise your resume, 
          ensuring it aligns seamlessly with employer requirements. Say goodbye to guesswork and hello to a resume that 
          stands out in the digital landscape.

          </div>
        </div>
      </section>
      <section className="h-full flex items-center px-[20px] lg:px-[50px] flex-col lg:flex-row  ">
        <div className="flex-1 px-[30px] flex flex-col lg:items-start mt-[150px] lg:mt-[0] items-center justify-center ml-[0] lg:ml-[50px]">
          <h1 className="font-medium  text-[36px] lg:text-start text-center">
          Headshots For All
          </h1>

          <div className="lg:text-start text-center  text-[16px] ">
          Whether  you have classes, Work ,  
          appointments or your an online students 1000 of miles away.  Never miss another Professional Headshot , because you can now make one on your Phone.

          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-screen items-center lg:gap-[65px] justify-center flex-1">
  <div className="lg:gap-[40px] flex flex-col lg:flex-row h-screen items-center justify-center">
    <div className="lg:mr-[4%] mb-4 lg:mb-0">
      <div className="bg-[#111111] rounded-[8px] h-[160px] lg:h-auto w-[80%] lg:w-[28%] flex-1"></div>
    </div>
    <div className="lg:mr-[4%] mb-4 lg:mb-0">
      <div className="bg-[#111111] rounded-[8px] h-[160px] lg:h-auto w-[80%] lg:w-[28%] flex-1"></div>
    </div>
    <div className="lg:mr-[4%] mb-4 lg:mb-0">
      <div className="bg-[#111111] rounded-[8px] h-[160px] lg:h-auto w-[80%] lg:w-[28%] flex-1"></div>
    </div>
  </div>
  <div>
    <div className="bg-[#111111] rounded-[8px] h-[250px] lg:h-auto w-[80%] lg:w-[28%] flex-1"></div>
  </div>
</div>


      </section>
      <section className="h-screen flex items-center px-[20px] lg:px-[50px] flex-col lg:flex-row  ">

        <div className="flex-1 relative items-center justify-center flex flex-col" >
          <h1 className="lg:text-[36px] text-[24px] font-medium mb-[20px] flex">Chrome extension</h1>
        <div className="bg-[#ecec69] rounded-[8px] h-full max-h-[350px] w-full max-w-[400px]  "></div>
        <div className="bg-[#111111] rounded-[8px] h-full max-h-[350px] w-full max-w-[400px] absolute top-[100px] left-[100px]"></div>
        </div>

        <div className="flex-1  flex flex-col lg:items-center mt-[150px] lg:mt-[0] items-center justify-center ml-[0] lg:ml-[50px]">
          <h1 className="font-medium  text-[20px] lg:text-[36px] lg:text-center text-center">
          APPLYISH AUTO COMPLETER CHROME EXTENSION
          </h1>

          <div className="lg:text-start text-center  text-[16px] ">
          It takes between 100-200 applications to get a job and each application has about an 8.3% chance of turning into an interview. Simply put , 
           the more jobs you apply for the better your chances to land an interview .Our browser extension auto-fills job application questions, helping students apply for jobs 10x faster.
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col">
      <h1 className="text-[36px] font-medium  flex mt-[50px]">Testimonies</h1>
      <Card />

      </section>
      <section className="flex items-center justify-center flex-col py-[60px]">
        <div className="flex flex-col items-center justify-center">

       
      <h1 className="text-[36px] font-medium  flex ">Our Partners</h1>
     <Testimony/>

      </div>
     

      </section>
      <footer className="  ">
        <div className="   bg-[#20201e] w-full py-[30px] ">

      
        <div className=" text-[#fff] ">@ 2024 School all right reaserved</div>
        </div>

      </footer>
     
    </div>
   
    </div>
    
  );
}

export default App;
