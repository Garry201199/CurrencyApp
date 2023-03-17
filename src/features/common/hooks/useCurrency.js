import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { fetchRates, fetchSymbols } from "../../currency/api/fetchData";

export const useCurrency = () => {
  const [amount, setAmount] = useState(22);
  const [currencyOne, setCurrencyOne] = useState("INR");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");
  // console.log("🚀 ~ file: useCurrency.js:9 ~ useCurrency ~ currencyOne currencyTwo ",currencyOne +' '+ currencyTwo)

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ["rates", currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ rates, date, timestamp }) => {
          return { rates, date, timestamp };
        },
        keepPreviousData : true
      },
      {
        queryKey: ["symbols"],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ symbols }) => symbols,
      },
    ],
  });
  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);
  const convertedAmount = (
    ratesData.data?.rates[`${currencyTwo}`] * amount
  ).toFixed(2);

  const date = new Date(ratesData.data?.date).toLocaleDateString();
  const time = new Date(ratesData.data?.timestamp).toLocaleTimeString("en-US");
  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {};
  // console.log("🚀 ~ file: useCurrency.js:37 ~ useCurrency ~ currencyList", currencyList)

  console.log(
    "🚀 ~ file: useCurrency.js:28 ~ useCurrency ~ convertedAmount",
    convertedAmount
  );

  return {
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
  };
};
