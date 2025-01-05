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

  let result

  if(!userInput.initialInvestment || !userInput.expectedReturn || !userInput.duration) {
    result = <p className="center">Please enter all values.</p>;
  }

  else if(userInput.initialInvestment <= 0 || userInput.expectedReturn <= 0 || userInput.duration <= 0) {
    result = <p className="center">Please enter positive values.</p>;
  }

  else{
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
  
    result = <Results annualData={currentAnnualData}/>;
  }

  

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onChangeValue={onChangeValue}
      />
      {result}
    </>
  );
}

export default App;
