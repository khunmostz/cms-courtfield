import { getLocalStorage } from "@/helpers/functions/localStorage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";

type Props = {};

type ScreenProps = {
  name: string;
  path: string;
};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getToken = getLocalStorage("token");

  // useState Screen
  const [screens, setScreens] = useState<ScreenProps[]>([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Register Now",
      path: "/register",
    },
  ]);

  useEffect(() => {
    if (getToken !== undefined && getToken !== null) {
      setScreens((prev) => prev.filter((item) => item.name !== "Register Now"));
    }
  }, [getToken]);

  return (
    <nav className="container mx-auto grid md:grid-cols-2 items-center text-sm pt-2 sticky top-0 bg-white">
      <div className="flex justify-between items-center font-bold text-lg">
        <Link href={"/"}>
          <img
            src="/images/logo.png"
            alt="logo"
            width="100px"
            height="100px"
            className="cursor-pointer"
          />
        </Link>
        <div className=" md:hidden">
          <RiMenu5Fill
            className="text-lg cursor-pointer"
            onClick={() => {
              setIsMobile(!isMobile);
              console.log(isMobile);
            }}
          />
        </div>
      </div>
      <ul
        className={`md:flex items-center justify-end md:space-x-4 md:space-y-0 md:static absolute bg-white w-full left-0 md:w-auto md:opacity-100transition-all ease-in-out duration-500 ${
          isMobile
            ? "sm:space-y-3 opacity-100 top-[60px] sm: h-[172px]"
            : "opacity-100 top-[-250px]"
        }`}
      >
        {screens.map((item: ScreenProps, index: number) =>
          item.name === "Register Now" ? (
            <li
              key={index}
              className=" sm:container sm:mx-auto sm:px-4 md:w-auto md:mx-0 md:p-0"
            >
              <Link href={item.path} className=" bg-green-500 text-white p-2">
                Register Now
              </Link>
            </li>
          ) : (
            <li
              key={index}
              className="relative group sm:container sm:mx-auto sm:px-4 md:w-auto md:mx-0 md:p-0"
            >
              <a
                href={item.path}
                className={
                  pathname === item.path ? "text-green-600" : "text-gray-600"
                }
              >
                {item.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-1 rounded-md bg-green-600 transition-all group-hover:w-full"></span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
