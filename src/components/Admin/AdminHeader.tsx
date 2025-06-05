"use client";
import { UserContext } from "@/context/user.context";
import React, { useContext } from "react";

const AdminHeader = () => {
  const context = useContext(UserContext);
  return (
    <div className="py-6 bg-black/70 text-white w-full px-6 rounded-2xl">
      <h1 className="text-3xl">Welcome {context?.user?.name}</h1>
    </div>
  );
};

export default AdminHeader;
