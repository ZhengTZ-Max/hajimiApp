import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./home.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hajimi 哈基米",
  description: "哈基米 · 官方介绍与互动音乐体验站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
