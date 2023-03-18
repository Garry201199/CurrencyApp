import {  useState } from "react";
import { useCurrency } from "../common/hooks/useCurrency";
import ConHeader from "./comp/ConHeader";
import ConOption1st from "./comp/ConOption1st";
import ConOption2nd from "./comp/ConOption2nd";
import query from '../common/assets/query.svg'
import axios from '../common/assets/axios.png'
import tailwind from '../common/assets/Tailwind_CSS_Logo.png'
const Converter = () => {
  const [inputError, setInputError] = useState("");
  const [inputValidated, setInputValidated] = useState(false);


  const validateInput = (value) => {
    if (/^[0-9]+$/.test(value)) {
      setInputValidated(true);
    } else {
      setInputValidated(false);
      setInputError("Enter integer value...");
    }
  };
  const {
    amount,
    setAmount,
    setCurrencyOne,
    setCurrencyTwo,
    currencyOne,
    currencyTwo,
    ratesData,
    symbolsData,
    isLoading,
    isError,
    date,
    time,
    currencyList,
    convertedAmount,
  } = useCurrency();
  if (isLoading) {
    <p className="text-4xl">Screen is loading 😉 ....</p>;
  }
  if (isError) {
    <p className="text-4xl">Something went wrong 😶‍🌫️ ....</p>;
  }

  return (
    <div className="text-white  ">
      
      <ConHeader />
      <div className="bg-[#f0f0f0] px-6 py-4 rounded-lg my-8 mx-4 ">
        <div className="flex md:flex-row  flex-col justify-center items-center gap-y-4 gap-x-8 ">
    
          {currencyList.length > 0 && (
            <div >
              <ConOption1st
                symbols={symbolsData.data}
                onCurrencyChange={setCurrencyOne}
                presentCurrency={currencyOne}
                currencyList={currencyList}
              />
            </div>
          )}
          <div className="text-slate-900 md:inline-block hidden font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {currencyList.length > 0 && (
            <div>
              <ConOption2nd
                symbols={symbolsData.data}
                onCurrencyChange={setCurrencyTwo}
                presentCurrency={currencyTwo}
                currencyList={currencyList}
              />
            </div>
          )}
        </div>
        <div className="flex py-6 gap-x-4  ">
          <div className={`flex flex-1 justify-center   items-start flex-col`}>
            <label className=" md:px-2 pb-2 font-semibold pt-3 self-start text-rose-900  ">
              Amount{" "}
            </label>
            <input
              className=" shadow-xl  outline outline-1 outline-gray-400/60 w-32 md:w-72 rounded-lg placeholder:text-rose-600  py-2 pl-3 pr-10 text-left  focus:outline-none  focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-1 focus-visible:ring-offset-rose-500 sm:text-sm text-rose-900"
              type="text"
              placeholder="Amount"
              value={amount }
              onChange={(e) => setAmount(e.target.value)}
              onBlur={(e) => validateInput(e.target.value)}
            />

            {!inputValidated && amount !== 22 && (
              <p className="text-red-800 animate-pulse  text-sm font-semibold " >Please Enter Value Amount to converted..</p>
            )}
          </div>
          <div className="flex  flex-col w-full flex-1  justify-center  ">
            <p className="self-end text-rose-900 text-lg font-semibold pl-2">
              {/^[0-9]+$/.test(amount) ? amount + " " + currencyOne : ""}
            </p>
              <div className="p-2 border border-rose-300   bg-rose-200 w-fit self-end rounded-xl ">
                <p className="self-end text-rose-900   font-bold text-2xl ">
              {convertedAmount === "NaN" ? "" : convertedAmount} {currencyTwo}
              {symbolsData?.data?.length > 0 && (
                <span className="font-semibold">
                  {" "}
                  ({symbolsData?.data[currencyTwo]}){" "}
                </span>
              )}
            </p>
              </div>
            
            <p className="hidden md:inline-flex text-end text-violet-600  text-sm md:font-normal ">
              {" "}
              Market rates collected at - {date} {time}{" "}
            </p>
          </div>
        </div>

        <p className=" md:hidden font-normal text-center text-violet-600  text-sm md:font-normal ">
              {" "}
              Market rates collected at - {date} {time}{" "}
            </p>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center   ">
        <p className="font-cali flex-wrap whitespace-nowrap self-center  flex items-center justify-center font-bold text-lg ">
          Made with 💓 from <span className="text-amber-400">&nbsp; Garry &nbsp;</span>  using  &nbsp;
          <span> <img src={query}  className='object-cover h-7 w-7' alt="query" /></span> &nbsp; React Query  ,
          &nbsp; <span> <img src={axios}  className='object-cover h-7 w-7' alt="query" /> </span>
          &nbsp; Axios and &nbsp;
           <span> <img src={tailwind} className='object-cover h-7 w-7'  alt="query" /> </span>
           &nbsp; Tailwind Css
        </p>
      </div>
    </div>
  );
};

export default Converter;
