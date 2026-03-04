import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navigation from "@/src/components/navigation";
import Footer from "@/src/components/footer";

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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
