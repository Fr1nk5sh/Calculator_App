import { useEffect, useRef } from "react";

type InputProps = {
  inputValue: string;
};

export default function CalcInputField({ inputValue }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input)
      input.scrollTo({
        left: input.scrollWidth,
        behavior: "smooth",
      });
  }, [inputValue]);

  return (
    <input
      ref={inputRef}
      type="text"
      aria-label="Displayed Calculation"
      className="p-[20px] text-[5rem] mx-auto outline-0 w-full bg-[hsl(0,0%,20%)] text-white text-right overflow-x-auto"
      readOnly
      value={inputValue}
    />
  );
}
