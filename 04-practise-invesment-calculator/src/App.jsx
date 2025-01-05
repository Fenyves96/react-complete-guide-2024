import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment.js";
import { useState } from "react";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12
  });

  function onChangeValue(key, newValue){
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [key]: newValue
      }
    })
  }

  let currentAnnualData = calculateInvestmentResults({
    ...userInput
  });

  for(let i = 0; i < currentAnnualData.length; i++) {
    if(i === 0) 
      currentAnnualData[i].totalInterest = currentAnnualData[i].interest;
    else
    currentAnnualData[i].totalInterest = currentAnnualData[i].interest + currentAnnualData[i-1].interest;
    currentAnnualData[i].investedCapital = userInput.initialInvestment + userInput.annualInvestment * (i + 1);
}

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onChangeValue={onChangeValue}
      />
      <Results annualData={currentAnnualData}/>
    </>
  );
}

export default App;
