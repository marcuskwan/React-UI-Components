import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="application-container">
      <div className="border">
        <CalculatorDisplay buttonStyle="display" text="0" />
        <div className="bottom">
          <div className="row">
            <ActionButton buttonStyle="action-button-style" text="clear" />
            <NumberButton buttonStyle="symbol-button-style" text="÷" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="number-button-style" text="7" />
            <NumberButton buttonStyle="number-button-style" text="8" />
            <NumberButton buttonStyle="number-button-style" text="9" />
            <NumberButton buttonStyle="symbol-button-style" text="x" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="number-button-style" text="4" />
            <NumberButton buttonStyle="number-button-style" text="5" />
            <NumberButton buttonStyle="number-button-style" text="6" />
            <NumberButton buttonStyle="symbol-button-style" text="-" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="number-button-style" text="1" />
            <NumberButton buttonStyle="number-button-style" text="2" />
            <NumberButton buttonStyle="number-button-style" text="3" />
            <NumberButton buttonStyle="symbol-button-style" text="+" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="action-button-style" text="0" />
            <NumberButton buttonStyle="symbol-button-style" text="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

/* // <div className="application-container">
    //   <CalculatorDisplay buttonStyle="calculator-display-style" text="0"/>
    //   <div className="bottom">
    //     <div className="left">
    //       <ActionButton buttonStyle="action-button-style" text="clear"/>
    //       <div className="numbers">
    //         <div className="numbers-row">
    //           <NumberButton buttonStyle="numbers" text="7"/>
    //           <NumberButton buttonStyle="numbers" text="8"/>
    //           <NumberButton buttonStyle="numbers" text="9"/>
    //         </div>
    //         <div className="numbers-row">
    //         <NumberButton buttonStyle="numbers" text="4"/>
    //           <NumberButton buttonStyle="numbers" text="5"/>
    //           <NumberButton buttonStyle="numbers" text="6"/>
    //         </div>
    //         <div className="numbers-row">
    //         <NumberButton buttonStyle="numbers" text="1"/>
    //           <NumberButton buttonStyle="numbers" text="2"/>
    //           <NumberButton buttonStyle="numbers" text="3"/>
    //         </div>
    //       </div>
    //       <ActionButton buttonStyle="action-button-style" text="0"/>
    //     </div>
    //     <div className="symbol-buttons">
          <NumberButton buttonStyle="symbols" text="÷"/>
    //       <NumberButton buttonStyle="symbols" text="x"/>
    //       <NumberButton buttonStyle="symbols" text="-"/>
    //       <NumberButton buttonStyle="symbols" text="+"/>
    //       <NumberButton buttonStyle="symbols" text="="/>
    //     </div>
    //   </div>
    // </div> */
