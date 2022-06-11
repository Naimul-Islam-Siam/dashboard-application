import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
   chart: false,
   cart: false,
   userProfile: false,
   notification: false
};

export const ContextProvider = ({ children }) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentThemeColor, setCurrentThemeColor] = useState("#03c9d7");
   const [currentThemeMode, setCurrentThemeMode] = useState("Light");
   const [themeSettings, setThemeSettings] = useState(false);

   const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: true });
   };

   const setThemeMode = (e) => {
      setCurrentThemeMode(e.target.value);
      localStorage.setItem("themeMode", e.target.value);
      setThemeSettings(false);
   };

   const setThemeColor = (themeColor) => {
      setCurrentThemeColor(themeColor);
      localStorage.setItem("colorMode", themeColor);
      setThemeSettings(false);
   };

   return (
      <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentThemeColor, setCurrentThemeColor, currentThemeMode, setCurrentThemeMode, setThemeMode, setThemeColor, themeSettings, setThemeSettings }}>
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => {
   return useContext(StateContext)
};