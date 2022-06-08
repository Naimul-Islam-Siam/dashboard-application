import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {
   const change = (args) => {
      document.getElementById("preview").style.backgroundColor = args.currentValue.hex;
   };

   return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
         <Header category="App" title="Color Picker" />
         <div className="text-center">
            <div id="preview" />
            <div className="flex justify-center items-center gap-20 flex-wrap">
               <div>
                  <p className="mt-2 mb-4 text-2xl font-semibold dark:text-gray-100">Inline Palette</p>
                  <ColorPickerComponent id="inline-palette" change={change} inline mode="Palette" modeSwitcher={false} showButtons={false} />
               </div>

               <div>
                  <p className="mt-2 mb-4 text-2xl font-semibold dark:text-gray-100">Inline Picker</p>
                  <ColorPickerComponent id="inline-picker" change={change} inline mode="Picker" modeSwitcher={false} showButtons={false} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ColorPicker;