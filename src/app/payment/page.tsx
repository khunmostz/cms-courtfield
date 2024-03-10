"use client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Payment({}: Props) {
  const pathname = usePathname();
  return <div>Payment {pathname}</div>;
}
