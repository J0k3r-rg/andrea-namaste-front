import type { Metadata } from "next";
import { alegreya } from '@/app/UI/fonts/AlegreyaSansSc';
import "./globals.css";
import Header from '@/app//UI/components/Header';
import Footer from '@/app/UI/components/Footer';


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
