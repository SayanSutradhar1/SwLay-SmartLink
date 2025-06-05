"use client";

import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserContext } from "@/context/user.context";

import avatar from "@/assets/icons/avatar.png";

const SideBar = () => {
  const context = useContext(UserContext);

  return (
    <div className="w-72 fixed left-0  bg-[#d4e0d4] flex flex-col h-screen shadow-lg rounded-lg">
      <div className="flex px-4 py-2 items-center justify-center gap-2">
        <Avatar>
          <AvatarImage src={avatar.src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="p-2 text-black font-semibold">
          {context?.user?.name ? context.user.name : "User Name"}
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-4 px-4">
        <button className="bg-black/60 text-white hover:bg-black cursor-pointer p-2 rounded-xl">
          Dashboard
        </button>
        <button className="bg-black/60 text-white hover:bg-black cursor-pointer p-2 rounded-xl">
          Analytics
        </button>
      </div>
    </div>
  );
};

export default SideBar;
