"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { UserContext } from "@/context/user.context";
import { useRouter } from "next/navigation";

export function InputDialog() {
  const [linkInput, setLinkInput] = useState<{
    handle: string;
    url: string;
  }>({
    handle: "",
    url: "",
  });

  const router = useRouter();

  const { user } = useContext(UserContext) || {};

  const addLink = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/addLink", {
        username : user?.username,
        handle: linkInput.handle,
        url: linkInput.url,
      });
      console.log(res.data);
      router.refresh()
    } catch (error) {
        console.error("Error adding link:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer mt-4">
          Add link <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Link</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Handle
            </Label>
            <Select
              value={linkInput.handle}
              onValueChange={(value) =>
                setLinkInput({ ...linkInput, handle: value })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Handles</SelectLabel>
                  <SelectItem value="Social 1">Social 1</SelectItem>
                  <SelectItem value="Social 2">Social 2</SelectItem>
                  <SelectItem value="Social 3">Social 3</SelectItem>
                  <SelectItem value="Social 4">Social 4</SelectItem>
                  <SelectItem value="Social 5">Social 5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Link
            </Label>
            <Input
              id="link"
              value={linkInput.url}
              onChange={(e) =>
                setLinkInput({ ...linkInput, url: e.target.value })
              }
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={addLink} className="cursor-pointer">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
