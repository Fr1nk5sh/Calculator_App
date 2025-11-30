import CalcInputField from "./calculator-input";
import CalcBtnKeys from "./calc-btn-keys";
import { useState } from "react";
import "./calc.module.css";

export default function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const appendToDisplay = (value: string) => {
    if (isComplete) {
      setInputValue("");
      setIsComplete(false);
    }
    setInputValue((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const result = new Function(`return ${inputValue}`)();
      setInputValue(result.toString());
    } catch {
      setInputValue("Error");
    }
    setIsComplete(true);
  };

  const clearDisplay = () => {
    setInputValue("");
    setIsComplete(false);
  };

  return (
    <div className="font-[arial,sans-serif] bg-[hsl(0,0%,15%)] rounded-[15px] max-w-[500px] mx-auto overflow-hidden">
      <CalcInputField inputValue={inputValue} />
      <CalcBtnKeys
        appendToDisplay={appendToDisplay}
        calculate={calculate}
        clearDisplay={clearDisplay}
      />
    </div>
  );
}
