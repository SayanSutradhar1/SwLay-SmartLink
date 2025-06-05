"use client";
import axios from "axios";

import { User } from "@/interfaces/user.interface";
import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./user.context";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const fetchUser = async (username = "sayan321x") => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/getUser", {
        username,
      });
      if (res.status === 200) {
        setUser(res.data.data);
      } else {
        console.log("Error fetching user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(undefined); // Set user to undefined in case of an error
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
