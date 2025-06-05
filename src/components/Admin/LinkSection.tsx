"use client";

import { UserContext } from "@/context/user.context";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaInstagram, FaTrash } from "react-icons/fa";

const LinkSection = () => {
  const router = useRouter();
  const { user } = useContext(UserContext) || {};

  const handleDeleteLink = async (handle: string) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/deleteLink",
        {
          username: user?.username,
          handle: handle,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      router.refresh();
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  return (
    <div className="flex flex-col w-full mt-4 text-white">
      <div className="w-full max-w-[680px] px-4 py-8 flex flex-col backdrop-blur-md bg-black/10 rounded-lg shadow-lg">
        <div className="w-full space-y-3 mb-8">
          {user?.links?.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                href={link.url}
                rel="noopener noreferrer external"
                className="flex items-center gap-3 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-md shadow-sm transition-all hover:shadow hover:translate-y-[-2px] border border-gray-100"
              >
                <FaInstagram className="h-5 w-5 text-pink-500 flex-shrink-0" />
                <span>{link.handle}</span>
              </Link>
              <button
                className="flex justify-center text-black items-center relative z-20 cursor-pointer p-2 bg-black/30 hover:bg-black/60 rounded-md transition-all duration-200 ease-in-out"
                onClick={() => {
                  handleDeleteLink(link.handle);
                }}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkSection;
