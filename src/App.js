import React, { useState } from "react";

export default function App() {
  return (
    <Counter />
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // 'count' and 'date' will always be updated at the same time.
  // 'date depends on 'count', so it should be updated in the same batch.
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDecrease() {
    if (count > 0) {
      setCount((prevCount) => prevCount - step);
    }
  }

  function handleIncrease() {
    setCount((prevCount) => prevCount + step);
  }

  function handleStepDecrease() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handleStepIncrease() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function displayDate() {
    if (count === 0) {
      return "Today is ";
    } 

    else if (count >= 1) {
      return `${count} days from today is `;
    }
    
    else {
      return `${count} days ago was `;
    }
  }

  

  return (
    <div>
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>

      <div>
        <button onClick={handleDecrease}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      <div>
        <span>{displayDate()}</span>
        <span>{date.toLocaleDateString()}</span>
      </div>

      <div className="reset-button">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
