"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

// React context allows states and variables to be stored and accessed across pages/components and is only reset when the site is reloaded
const FirstVisitContext = createContext();

export const FirstVisitProvider = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(null)

  useEffect(() => {
    // Check if the site has been visited before
    if (isFirstVisit == null) {
      setIsFirstVisit(false)
    }
  }, []);

  return (
    <FirstVisitContext.Provider value={{ isFirstVisit }}>
      {children}
    </FirstVisitContext.Provider>
  );
};

export const useFirstVisit = () => useContext(FirstVisitContext);
