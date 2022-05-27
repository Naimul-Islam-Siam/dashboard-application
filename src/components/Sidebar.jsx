import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "./../data/dummy";

const Sidebar = () => {
   const activeMenu = true;
   const activeLinkStyle = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
   const normalLinkStyle = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

   return (
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
         {activeMenu && (<>
            <div className="flex justify-between items-center">
               <Link to="/" onClick={() => { }} className="items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight flex dark:text-white text-slate-900">
                  <SiShopware /> <span>Shoppy</span>
               </Link>

               <TooltipComponent content="Menu" position="BottomCenter">
                  <button className="text-xl block p-3 mt-4 hover:bg-light-gray rounded-full md:hidden">
                     <MdOutlineCancel />
                  </button>
               </TooltipComponent>
            </div>

            <div className="mt-10">
               {links.map((item) => (
                  <div key={item.title}>
                     <p className="text-gray-400 m-3 mt-4 uppercase">
                        {item.title}
                     </p>
                     {item.links.map((link) => (
                        <NavLink to={`/${link.name}`} onClick={() => { }} key={link.name} className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}>
                           {link.icon}
                           <span className="capitalize">{link.name}</span>
                        </NavLink>
                     ))}
                  </div>
               ))}
            </div>
         </>)}
      </div>
   );
};

export default Sidebar;