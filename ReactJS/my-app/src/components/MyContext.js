import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const sharedValue = 'Hello from Context!';

  return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  return useContext(MyContext);
};
