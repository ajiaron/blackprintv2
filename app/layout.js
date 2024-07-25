import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BLACKPRINT",
  description: "Your design agency for branding, marketing, and more.",
  icons: { icon: "/assets/logo.png", sizes: "any", type: "image/png" },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
