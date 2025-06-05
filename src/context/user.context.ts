"use client";
import { User } from "@/interfaces/user.interface";
import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextType {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

export const UserContext = createContext<UserContextType | null>(null);
