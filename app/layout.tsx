import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatUi } from "./pages/chat";
import { Footer } from "./footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai App created with next",
  description: "gemini ai generate text and picture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>     
        
      <div className="lg:ml-64">
     
        {children}
      
          <Footer/>
      </div>
      </body>
    </html>
  );
}
