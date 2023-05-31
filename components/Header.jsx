"use client";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { React } from "react";
import {
  RiSearchLine,
  RiMessage2Line,
  RiNotification4Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiThumbUpLine,
  RiChat1Line
} from "react-icons/ri";
import Link from "next/link";

const Header = (props) => {
  return (
    <header className="fixed w-full xl:w-[calc(100%-384px)] xl:ml-96 flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 gap-4">
      <form action="" className="order-1 md:order-none">
        <div className="relative">
          <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            className="bg-white outline-none py-2 px-4 rounded-full pl-10 pr-4"
            placeholder="Search"
          />
        </div>
      </form>
      <nav className="flex items-center gap-2 text-lg">
        {/* Messages */}
        <Menu as="div">
          <Menu.Button className="hover:bg-gray-200 p-2 rounded-lg transition-colors relative">
            <RiMessage2Line />
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="section"
              className="absolute top-6 right-0 bg-gray-100 w-72 shadow-lg p-4"
            >
              <div>
                <h1 className="font-medium text-center mb-4">Mensajes</h1>
                <hr className="my-2"/>
                <Menu.Item>
                  <Link href={""} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors">
                    <Image
                      src={"/chica.jpg"}
                      width={80}
                      height={80}
                      className="w-8 h-8 rounded-full object-cover ring-4 ring-white"
                      alt="Hola"
                    />
                  <div>
                    <h5 className="text-base">José Marcano</h5>
                    <p className="text-gray-400 text-sm">Mensaje aqui...</p>
                  </div>
                  </Link>
                  
                </Menu.Item>
                <Menu.Item>
                  <Link href={""} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors">
                    <Image
                      src={"/chica.jpg"}
                      width={80}
                      height={80}
                      className="w-8 h-8 rounded-full object-cover ring-4 ring-white"
                      alt="Hola"
                    />
                  <div>
                    <h5 className="text-base">Manuel Villarroel</h5>
                    <p className="text-gray-400 text-sm">Mensaje aqui...</p>
                  </div>
                  </Link>
                  
                </Menu.Item>
                <Menu.Item>
                  <Link href={""} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors">
                    <Image
                      src={"/chica.jpg"}
                      width={80}
                      height={80}
                      className="w-8 h-8 rounded-full object-cover ring-4 ring-white"
                      alt="Hola"
                    />
                  <div>
                    <h5 className="text-base">jorge Guayapero </h5>
                    <p className="text-gray-400 text-sm">Mensaje aqui...</p>
                  </div>
                  </Link>
                  
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Notifications */}
        <Menu as="div">
          <Menu.Button className="hover:bg-gray-200 p-2 rounded-lg transition-colors relative">
            <RiNotification4Line />
            <RiCheckboxBlankCircleFill className="absolute top-1 right-2 text-[10px] text-orange-500" />
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="section"
              className="absolute top-6 right-0 bg-gray-100 w-72 shadow-lg p-4"
            >
              <div>
                <h1 className="font-medium text-center mb-4">Notificaciones</h1>
                <hr className="my-2"/>
                <Menu.Item>
                <Link href={""} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors text-blue-900">
                  <RiThumbUpLine className="p-2 box-content rounded-full bg-blue-100"/>
                  <div>
                    <h5 className="text-base">A José Marcano le gustó tu foto</h5>
                  </div>
                  </Link>
                  
                </Menu.Item>
                <Menu.Item>
                  <Link href={""} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors text-blue-900">
                  <RiChat1Line className="p-2 box-content rounded-full bg-blue-100 text-2xl" />
                  <div>
                    <h5 className="text-base">A Manuel Villarroel le gustó tu <span className="font-bold">publicacion</span></h5>
                  </div>
                  </Link>
                  
                </Menu.Item>
                <Menu.Item>
                <Link href={""} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors text-blue-900">
                  <RiThumbUpLine className="p-2 box-content rounded-full bg-blue-100"/>
                  <div>
                    <h5 className="text-base">A jorge Guayapero le gustó tu <span className="font-bold">foto</span> </h5>
                  </div>
                  </Link>
                  
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        
        <button className="items-center gap-4 flex hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors">
          <Image
            src={"/chica.jpg"}
            width={60}
            height={60}
            className="w-7 h-7 rounded-full object-cover "
            alt="Hola"
          />
          <span>José Marcano</span>
          <RiArrowDownSLine />
        </button>
      </nav>
    </header>
  );
};

export default Header;
