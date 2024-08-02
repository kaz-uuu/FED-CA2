"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

// React context allows states and variables to be stored and accessed across pages/components and is only reset when the site is reloaded
// This context is used to manage my animations
// The first visit value is used to determine whether to run my loading/introduction animation sequence for the home page

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    // Check if the site has been visited before, and if it has, set it to false for future reference
    if (isFirstVisit) { 
      setIsFirstVisit(false)
    }
  }, []);

  return (
    <stateContext.Provider value={{ isFirstVisit }}>{/* Make the states accessible */}
        {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext)
