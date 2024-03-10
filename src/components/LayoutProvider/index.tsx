"use client";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {/* {!["/login", "/register"].includes(pathname) && <Navbar />} */}
      <Navbar />
      {children}
    </>
  );
};
