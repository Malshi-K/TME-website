import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/constants/Header";
import Footer from "@/components/constants/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Total Migration & Enterprises Limited",
  description: "Total Migration & Enterprises Limited | For All Your Immigration Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
