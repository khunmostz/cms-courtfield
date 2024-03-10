import { LayoutProvider } from "@/components/LayoutProvider";
import StoreProvider from "@/components/StoreProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cms-courtfield",
  description: "Created by khunmostz24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white text-black`}>
        <StoreProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
