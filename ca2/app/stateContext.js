"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

// React context allows states and variables to be stored and accessed across pages/components and is only reset when the site is reloaded
// This context is used to manage my animations
// The first visit value is used to determine whether to run my loading/introduction animation sequence for the home page

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [navBarTimeline, setNavBarTimeline] = useState(null)
  const [isMainAnimationComplete, setIsMainAnimationComplete] = useState(false)
  const [stopAnimating, setStopAnimating] = useState(false)

  useEffect(() => {
    // Check if the site has been visited before, and if it has, set it to false for future reference
    if (isFirstVisit) { 
      setIsFirstVisit(false)
    }
  }, []);

  useEffect(() => {
    if (isMainAnimationComplete && navBarTimeline && !stopAnimating) {
      navBarTimeline.play()
      setStopAnimating(true)
    }
  }, [isMainAnimationComplete, navBarTimeline])

  return (
    <stateContext.Provider value={{ isFirstVisit, setNavBarTimeline, setIsMainAnimationComplete }} > {/* Make the states accessible */}
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext)
