"use client";
import { getLocalStorage } from "@/helpers/functions/localStorage";
import Link from "next/link";
type Props = {};

export default function Banner({}: Props) {
  const getToken = getLocalStorage("token");

  return (
    <div className="w-[100vw] h-[40rem]">
      <div className="container mx-auto h-full flex sm:flex-col md:flex-row justify-center p-2">
        <div className="w-full h-full space-y-3">
          <div className="md:text-[10rem] sm:text-[6rem]">Header</div>
          <div className="text-[2rem]">Content something...</div>
          <div className="text-[1rem]">something.....</div>
          {getToken === undefined || getToken === null ? (
            <div className="z-[999]">
              <Link
                href="/login"
                className=" bg-green-500 text-white text-[1rem] px-4 py-2"
              >
                Login
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className=" md:w-4/6 sm:h-4/6 sm:w-full md:h-full">
          <img
            alt="banner"
            src="/images/banner.png"
            loading="eager"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
