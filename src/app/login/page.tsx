"use client";
import { getLocalStorage, setLocalStorage } from "@/helpers/functions/localStorage";
import { useAppDispatch } from "@/redux/stores/hooks";
import { setLoading } from "@/redux/stores/slices/loadingSlice";
import { loginByPass } from "@/services/login/login.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getToken = getLocalStorage("token");

  const repos = {
    loginByPass: async () => {
      let data = await loginByPass({
        username: userName,
        password: password,
      });
      return data;
    },
  };

  const handleLogin = async () => {
    try {
      dispatch(setLoading(true));
      let res = await repos.loginByPass();
      dispatch(setLoading(false));
      console.log("res", res);

      if (res !== undefined) {
        setLocalStorage("token", res.token);
        router.push("/");
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    if (getToken !== undefined && getToken !== null) {
      router.push("/");
    }
  }, []);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-[500px] p-4 border flex flex-col justify-center space-y-2 rounded-lg">
        <div className="text-center text-lg font-bold text-green-500">
          CMS-COURTFIELD
        </div>
        <label htmlFor="Email" className="text-green-500">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary p-2"
        />
        <label htmlFor="Email" className="text-green-500">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary p-2"
        />
        <div className="flex justify-end">
          <div className="text-[12px] text-green-500 cursor-pointer">
            register ?
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white rounded-lg py-2"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
