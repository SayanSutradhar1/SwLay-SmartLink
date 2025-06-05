"use client";

import { UserContext } from "@/context/user.context";
import { useContext } from "react";
import { FaLink } from "react-icons/fa";
import { InputDialog } from "./InputDialog";
import Link from "next/link";

const AdminProfile = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <span className="flex items-center gap-1">
        username: <FaLink />
        {context?.user?.username ? context.user.username : "User Name"}
      </span>
      <Link
        href={`/${context?.user?.username}`}
        className="flex items-center gap-1"
      >
        <span className="text-blue-500">Go to SmartLink</span>
      </Link>
      <div>
        {/* <button className="flex gap-1 items-center px-6 py-2 bg-black/80 hover:bg-black mt-4 rounded-md cursor-pointer text-white">
          Add
          <FaPlus />
        </button> */}
        <InputDialog />
      </div>
    </div>
  );
};

export default AdminProfile;
