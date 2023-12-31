import React, { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  // 1. Create a new state variable
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

  function handleStep(event) {
    setStep(Number(event.target.value));
  }

  function handleCount(event) {
    if (event.target.value === "") {
      setCount(0);
    } else {
      setCount(Number(event.target.value));
    }
  }

  // Reset the state after form submission. This will allow React to automatically keep this state in sync with these form elements.
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function displayDate() {
    if (count === 0) {
      return "Today is ";
    } else if (count >= 1) {
      return `${count} days from today is `;
    } else {
      return `${count} days ago was `;
    }
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStep}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={handleDecrease}>-</button>
        <input type="text" value={count} onChange={handleCount} />
        <button onClick={handleIncrease}>+</button>
      </div>

      <div>
        <span>{displayDate()}</span>
        <span>{date.toLocaleDateString()}</span>
      </div>

      {count !== 0 || step !== 1 ? (
        <div className="reset-button">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
