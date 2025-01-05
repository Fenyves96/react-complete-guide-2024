import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment.js";
import { useState } from "react";


function App() {

  const[currentInitialInvesment, setCurrentInitialInvesment] = useState(10000);
  const[currentAnnualInvesment, setCurrentAnnualInvesment] = useState(300);
  const[currentExpectedReturn, setCurrentExpectedReturn] = useState(5.5);
  const[currentDuration, setCurrentDuration] = useState(12);


  function onChangeValues(initialInvesment, annualInvesment, expectedReturn, duration) {
    setCurrentInitialInvesment(initialInvesment);
    setCurrentAnnualInvesment(annualInvesment);
    setCurrentExpectedReturn(expectedReturn);
    setCurrentDuration(duration);
  }

  let currentAnnualData = calculateInvestmentResults({
    initialInvestment: currentInitialInvesment,
    annualInvestment: currentAnnualInvesment,
    expectedReturn: currentExpectedReturn,
    duration: currentDuration
  });

  for(let i = 0; i < currentAnnualData.length; i++) {
    if(i === 0) 
      currentAnnualData[i].totalInterest = currentAnnualData[i].interest;
    else
    currentAnnualData[i].totalInterest = currentAnnualData[i].interest + currentAnnualData[i-1].interest;
    currentAnnualData[i].investedCapital = currentInitialInvesment + currentAnnualInvesment * (i + 1);
}

  return (
    <>
      <Header />
      <UserInput
        defaultInitialInvesment= {currentInitialInvesment}
        defaultAnnualInvesment={currentAnnualInvesment}
        defaultExpectedReturn={currentExpectedReturn}
        defaultDuration={currentDuration}
        onChangeValues={onChangeValues}
      />
      <Results annualData={currentAnnualData}/>
    </>
  );
}

export default App;
