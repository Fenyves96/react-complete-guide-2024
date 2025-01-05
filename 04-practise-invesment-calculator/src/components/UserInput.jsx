export default function UserInput({
  userInput,
  onChangeValue
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
                onChangeValue('initialInvestment', event.target.valueAsNumber);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) => {
              onChangeValue('annualInvestment', event.target.valueAsNumber);
          }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expectedReturn</label>
          <input
           type="number"
           required
           value={userInput.expectedReturn}
           onChange={(event) => {
               onChangeValue('expectedReturn', event.target.valueAsNumber);
           }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
           type="number"
           required
           value={userInput.duration}
           onChange={(event) => {
               onChangeValue('duration', event.target.valueAsNumber);
           }}
          />
        </p>
      </div>
    </section>  
  );
}
