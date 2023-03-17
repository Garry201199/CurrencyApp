import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const ConOption1st = ({
  currencyList,
  onCurrencyChange,
  presentCurrency,
  symbols,
}) => {
  const [selected, setSelected] = useState(presentCurrency);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onCurrencyChange(selected);
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  }, [selected]);

  return (
    <div className=" drop-shadow-lg   w-72">
      <Listbox
        value={selected}
        // onFocusIn={console.log('focus In')}
        // onBlur ={console.log('blur Out')}
        // onClickCapture={(e) => {
        //   idOfOptionOpened === "" && e.type === "click"
        //     ? setIdOfOptionOpened(
        //         e.target.parentNode.parentNode.parentNode.parentNode.id
        //       )
        //     : setIdOfOptionOpened("");
           
        // }}
        
        // onBlurCapture={(e) => {
        //   idOfOptionOpened === "firstCurrency" && e.type !== "blur"
        //     ? null
        //     : setIdOfOptionOpened("");
        //   console.log(e.type);
        // }}
        onChange={setSelected}
      >
        <div className="relative z-30 mt-1">
          <Listbox.Button
            className="relative z-10 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate font-semibold text-rose-500">
              {selected + " - " + symbols[selected]}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute  z-20
              mt-1 max-h-60 w-full overflow-auto rounded-md 
               scroll-smooth bg-rose-800/60 backdrop-blur-md py-1 text-base shadow-lg ring-1
             ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {currencyList.map((currency, currencyIdx) => (
                <Listbox.Option
                  key={currencyIdx}
                  className={({ active }) =>
                    `relative z-30 cursor-default select-none py-2 pl-6 pr-4 ${
                      active ? " bg-amber-100 text-rose-900" : "text-gray-100"
                    }`
                  }
                  value={currency}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate  ${
                          selected ? "font-medium   " : "  font-normal"
                        }`}
                      >
                        {currency + " - " + symbols[currency]}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ConOption1st;
