import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import "@/styles/global.css";
import { Providers } from "@/components/Provider";

const inter = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BarberShop Borodinski",
  description:
    "BarberShop Borodinski is a website about a barbershop in Moskow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
