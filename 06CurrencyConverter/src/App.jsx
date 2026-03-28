import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";
import image from '../src/assets/image.png'

function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);

    
  };

  const convert=()=>{
    if (currencyInfo[to]){
      setConvertedAmount(amount*currencyInfo[to])
    }
  }
  return (
    <>
     <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage:`url(${image})`,
        }}
    >
      <div className="flex flex-col justify-center items-center  h-screen w-full">
        <InputBox
          label={"From"}
          currencyOptions={options}
          amount={amount}
          selectCurrency={from}
          currencyDisable={to}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 text-xl cursor-pointer"
            onClick={swap}
          >
            swap
          </button>
        </div>
        <InputBox
          label={"To"}
          currencyOptions={options}
          selectCurrency={to}
          currencyDisable={from}
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisable
        />
        <button
          type="submit"
          className="w-50 bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer" onClick={convert}
        >
          Convert {from} to {to}
        </button>
      </div>
      </div>
    </>
  );
}

export default App;
