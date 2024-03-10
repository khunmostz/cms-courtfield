"use client";
import { usePathname } from "next/navigation";

type Props = {};

export default function Payment({}: Props) {
  const pathname = usePathname();
  return <div className="container mx-auto">Payment {pathname}</div>;
}
