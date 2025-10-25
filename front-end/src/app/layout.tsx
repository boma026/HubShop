import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sistema de Vendas e Compras',
  description: 'Gerencie suas vendas e compras com eficiência',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (  
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <div className="flex min-h-screen bg-gray-50 text-gray-900 pt-16">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </body>
      </html>
  );
}
