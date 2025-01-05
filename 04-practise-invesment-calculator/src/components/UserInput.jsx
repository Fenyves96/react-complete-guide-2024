import { useState } from "react";

export default function UserInput({
  defaultInitialInvesment,
  defaultAnnualInvesment,
  defaultExpectedReturn,
  defaultDuration,
  onChangeValues
}) {
  const [initialInvesment, setInitialInvesment] = useState(
    defaultInitialInvesment
  );
  const [annualInvesment, setAnnualInvesment] = useState(
    defaultAnnualInvesment
  );
  const [expectedReturn, setExpectedReturn] = useState(defaultExpectedReturn);
  const [duration, setDuration] = useState(defaultDuration);
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number"
            value={initialInvesment}
            onChange={(event) => {setInitialInvesment(event.target.valueAsNumber)
                onChangeValues(event.target.valueAsNumber, annualInvesment, expectedReturn, duration);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
          type="number"
            value={annualInvesment}
            onChange={(event) => {setAnnualInvesment(event.target.valueAsNumber)
                onChangeValues(initialInvesment, event.target.valueAsNumber, expectedReturn, duration)}
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expectedReturn</label>
          <input
           type="number"
            value={expectedReturn}
            onChange={(event) => {setExpectedReturn(event.target.valueAsNumber)
                onChangeValues(initialInvesment, annualInvesment , event.target.valueAsNumber, duration)}
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
           type="number"
            value={duration}
            onChange={(event) => {setDuration(event.target.valueAsNumber)
                onChangeValues(initialInvesment, annualInvesment, expectedReturn, event.target.valueAsNumber)}
            }
          />
        </p>
      </div>
    </section>
  );
}
