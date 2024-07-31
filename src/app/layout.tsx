import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./routing/Layout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EOH",
  description: "Feel Your Music",
  icons:{
    icon: ['/favicon.ico'],
    apple:['/apple-touch-icon.png'],
    shortcut:['/apple-touch-icon.png']
  }
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
