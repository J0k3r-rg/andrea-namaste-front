import type { Metadata } from "next";
import { alegreya } from "./assets/fonts/AlegreyaSansSc";
import "./globals.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";


export const metadata: Metadata = {
  title: "Andrea Namaste",
  description: "Andrea namaste medicine alternative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alegreya.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
