import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummy";

const ThemeSettings = () => {
   const { setThemeColor, setThemeMode, setThemeSettings, currentThemeColor, currentThemeMode } = useStateContext();

   return (
      <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
         <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg dark:[#484b52] w-400">
            <div className="flex justify-between items-center p-4 ml-4">
               <p className="font-semibold text-xl">Settings</p>
               <button onClick={() => { setThemeSettings(false) }} type="button" style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }} className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
                  <MdOutlineCancel />
               </button>
            </div>

            <div className="flex-col border-t-1 border-color p-4 ml-4">
               <p className="font-semibold text-lg">Theme Options</p>

               <div className="mt-4">
                  <input type="radio" id="light" name="theme" value="Light" onChange={setThemeMode} checked={currentThemeMode === "Light"} className="cursor-pointer" />
                  <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
               </div>

               <div className="mt-4">
                  <input type="radio" id="dark" name="theme" value="Dark" onChange={setThemeMode} checked={currentThemeMode === "Dark"} className="cursor-pointer" />
                  <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
               </div>
            </div>

            <div className="flex-col border-t-1 border-color p-4 ml-4">
               <p className="font-semibold text-lg">Theme Colors</p>
               <div className="flex gap-3">
                  {themeColors.map((item, index) => (
                     <TooltipComponent key={index} content={item.name} position="TopCenter">
                        <div className="mt-2 relative flex gap-5 items-center cursor-pointer">
                           <button type="button" onClick={() => setThemeColor(item.color)} style={{ backgroundColor: item.color }} className="h-10 w-10 rounded-full cursor-pointer">
                              <BsCheck className={`ml-2 text-2xl text-white ${currentThemeColor === item.color ? "block" : "hidden"}`} />
                           </button>
                        </div>
                     </TooltipComponent>
                  ))}
               </div>
            </div>
         </div>
      </div >
   );
};

export default ThemeSettings;