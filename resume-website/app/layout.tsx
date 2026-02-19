import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// todo: change description
export const metadata: Metadata = {
  title: "Jéssica Carvalho Resume",
  description: "This is a resume website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
