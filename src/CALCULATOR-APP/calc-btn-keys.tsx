type KeyProps = {
  appendToDisplay: (value: string) => void;
  calculate: () => void;
  clearDisplay: () => void;
};

export default function CalcBtnKeys({
  appendToDisplay,
  calculate,
  clearDisplay,
}: KeyProps) {
  const keys = "+789-456*123/0.".split("");

  function getButtonColor(k: string) {
    const optKeys = "+-*/".split("");
    return optKeys.includes(k)
      ? "bg-[hsl(35,100%,55%)] hover:bg-[hsl(35,100%,65%)] active:bg-[hsl(35,100%,75%)]"
      : "bg-[hsl(0,0%,30%)] hover:bg-[hsl(0,0%,40%)] active:bg-[hsl(0,0%,50%)]";
  }

  return (
    <div className="grid grid-cols-4 gap-[10px] p-[25px]">
      {keys.map((k, i) => (
        <button
          key={i}
          onClick={() => appendToDisplay(k.trim())}
          className={`${getButtonColor(
            k
          )} text-white text-[3rem] font-semibold rounded-[50px] py-4 cursor-pointer w-[100px] h-[100px]`}
        >
          {k}
        </button>
      ))}

      <button
        onClick={calculate}
        className="bg-[hsl(0,0%,30%)] hover:bg-[hsl(0,0%,40%)] active:bg-[hsl(0,0%,50%)] text-white text-[3rem] font-semibold rounded-[50px] py-4 cursor-pointer w-[100px] h-[100px]"
      >
        =
      </button>

      <button
        onClick={clearDisplay}
        className="bg-[hsl(35,100%,55%)] hover:bg-[hsl(35,100%,65%)] active:bg-[hsl(35,100%,75%)] text-white text-[3rem] font-semibold rounded-[50px] py-4 cursor-pointer w-[100px] h-[100px]"
      >
        C
      </button>
    </div>
  );
}
