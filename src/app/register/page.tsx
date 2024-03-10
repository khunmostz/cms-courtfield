"use client";

import Link from "next/link";
import { useEffect } from "react";

import { getLocalStorage } from "@/helpers/functions/localStorage";
import { useRouter } from "next/navigation";

export default function Register() {
  const getToken = getLocalStorage("token");

  const router = useRouter();
  useEffect(() => {
    if (getToken !== undefined && getToken !== null) {
      router.push("/");
    }
  }, []);
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-[30%] p-4 border flex flex-col justify-center space-y-2 rounded-lg">
        <div className="text-center text-lg font-bold text-green-500">
          CMS-COURTFIELD
        </div>
        <label htmlFor="Email" className="text-green-500">
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary p-2"
        />
        <label htmlFor="Email" className="text-green-500">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary p-2"
        />
        <div className="flex justify-end">
          <div className="text-[12px] text-green-500 cursor-pointer">
            <Link href={"/login"}>login ?</Link>
          </div>
        </div>
        <button className="bg-green-500 text-white rounded-lg py-2">
          REGISTER
        </button>
      </div>
    </div>
  );
}
