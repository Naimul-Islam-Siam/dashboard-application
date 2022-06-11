import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Calendar, ColorPicker, Customers, ECommerce, Editor, Employees, Kanban, Orders, Area, ColorMapping, Financial, Line, Pie, Stacked } from "./pages";
import { useStateContext } from './contexts/ContextProvider';
import "./App.css";

const App = () => {
   const { activeMenu, themeSettings, setThemeSettings, currentThemeColor, currentThemeMode, setCurrentThemeColor, setCurrentThemeMode } = useStateContext();

   useEffect(() => {
      const currentThemeColor = localStorage.getItem("colorMode");
      const currentThemeMode = localStorage.getItem("themeMode");
      if (currentThemeColor && currentThemeMode) {
         setCurrentThemeColor(currentThemeColor);
         setCurrentThemeMode(currentThemeMode);
      }
   }, [setCurrentThemeColor, setCurrentThemeMode]);

   return (
      <div className={currentThemeMode === "Dark" ? "dark" : ""}>
         <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
               <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                  <TooltipComponent content="Settings" position="Top">
                     <button type="button" onClick={() => setThemeSettings(true)} className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentThemeColor, borderRadius: "50%" }}>
                        <FiSettings />
                     </button>
                  </TooltipComponent>
               </div>
               {activeMenu ? (
                  <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                     <Sidebar />
                  </div>
               ) : (
                  <div className="w-0 dark:bg-secondary-dark-bg">
                     <Sidebar />
                  </div>
               )}
               <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
                  <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                     <Navbar />
                  </div>

                  <div>
                     {themeSettings && <ThemeSettings />}

                     <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<ECommerce />} />
                        <Route path="/ecommerce" element={<ECommerce />} />

                        {/* Pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />

                        {/* Apps */}
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path="/line" element={<Line />} />
                        <Route path="/area" element={<Area />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/financial" element={<Financial />} />
                        <Route path="/color-mapping" element={<ColorMapping />} />
                        <Route path="/stacked" element={<Stacked />} />
                     </Routes>
                  </div>
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
};

export default App;