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
   const [currentThemeColor, setcurrentThemeColor] = useState("#03c9d7");
   const [currentThemeMode, setcurrentThemeMode] = useState("Light");
   const [themeSettings, setThemeSettings] = useState(false);

   const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: true });
   };

   const setThemeMode = (e) => {
      setcurrentThemeMode(e.target.value);
      localStorage.setItem("themeMode", e.target.value);
      setThemeSettings(false);
   };

   const setThemeColor = (themeColor) => {
      setcurrentThemeColor(themeColor);
      localStorage.setItem("colorMode", themeColor);
      setThemeSettings(false);
   };

   return (
      <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentThemeColor, currentThemeMode, setThemeMode, setThemeColor, themeSettings, setThemeSettings }}>
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => {
   return useContext(StateContext)
};