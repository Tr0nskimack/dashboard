"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
    RiHome6Line,
    RiToolsLine,
    RiBookLine,
    RiMessage2Line,
    RiMenu3Fill,
    RiCloseLine
} from "react-icons/ri";

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }
    
  return (
    /* xl:left-0 significa que para desktop el menu siempre saldra */
    <div className={`bg-gray-100 xl:left-0 fixed w-3/4 top:0 md:w-96 h-full p-8 flex flex-col justify-between transition-all z-50 ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <h1 className="text-3xl uppercase font-bold mb-10">Tu logo</h1>
        <ul className="flex flex-col gap-4 text-lg">
          <li className="flex items-center gap-2 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg">
            <RiHome6Line />
            <Link href={""}>DashBoard</Link>
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg">
            <RiToolsLine />
            <Link href={""}>Resources</Link>
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg">
            <RiBookLine />
            <Link href={""}>Learning Plate</Link>
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg">
            <RiMessage2Line />
            <Link href={""}>Chat</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center text-gray-300">
        <Image
          src={"/chica.jpg"}
          width={60}
          height={60}
          className="w-10 h-10 rounded-full object-cover ring-4 ring-white"
          alt="Hola"
        />
        <div >
        <h1 className="text-gray-700 font-semibold text-lg">José Marcano</h1>
        <p className="text-gray-500 text-sm">Ing. Informatico</p>

        </div>
      </div>
        {/* BTN MOBIL */}
        <button onClick={toggleMenu} className="fixed bottom-6 right-6 bg-teal-500 p-4 rounded-full shadow-2xl text-lg xl:hidden">
            {showMenu ? <RiCloseLine/> : <RiMenu3Fill/> }
        </button>
    </div>
  );
};

export default Sidebar;
