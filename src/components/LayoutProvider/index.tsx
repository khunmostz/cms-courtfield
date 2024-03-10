"use client";
import { useAppSelector } from "@/redux/stores/hooks";
import { loading } from "@/redux/stores/slices/loadingSlice";
import { usePathname } from "next/navigation";
import LoadingOverlay from "react-loading-overlay-ts";
import Navbar from "../Navbar";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const loadingOverlay: boolean = useAppSelector(loading);
  return (
    <>
      {/* {!["/login", "/register"].includes(pathname) && <Navbar />} */}
      <LoadingOverlay spinner active={loadingOverlay}>
        <Navbar />
        {children}
      </LoadingOverlay>
    </>
  );
};
