import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./routing/Layout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EOH Music",
  description: "Feel Your Music"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      
        <Layout>{children}</Layout>
       
        </body>
      
    </html>
  );
}
