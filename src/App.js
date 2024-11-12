import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if(step === 1){
      setStep(3);
    } else {
      setStep((curStep) => curStep - 1);
    }
  }

  function handleNext() {
    if (step > 2) {
      setStep(1);
    } else {
      setStep((curStep) => curStep + 1);
    }
  }

  return (
    <>
    <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

/**
 * State can be completelty removed if comp is unmounted
 * fragment will return without the global div
 * Always update the state using the cur val set by the call back -
 * -- to set the updated value in memory
 * 
 * DECLARATIVE
 * -----------------------------------------
 * Each comp renders it own state ui = f(state)
 * 
 * 
 * Practical guidelines
 * 
 * - State 
 *   Updated in an event handler
 *   Data that changes at some point
 *   Dynamic data - always start with static
 *   State = memory
 * 
 */