import { createContext, useState } from "react";

export const DemoContext = createContext();

export const DemoContextB = createContext(); // From Body

export const DemoProvider = (props) => {
  const [globalCount, setGlobalCount] = useState(0);

  const demoContextValue = {
    globalCount: globalCount,
    increase: () => {
      setGlobalCount(globalCount + 1);
    },
    decrease: () => {
      if (globalCount > 0) {
        setGlobalCount(globalCount - 1);
      }
    },
  };

  return (
    <DemoContext.Provider value={demoContextValue}>
      {props.children}
    </DemoContext.Provider>
  );
};

export const DemoProviderB = (props) => {
  const contextValueB = {
    data: "Data From Context B",
  };

  return (
    <DemoContextB.Provider value={contextValueB}>
      {props.children}
    </DemoContextB.Provider>
  );
};
