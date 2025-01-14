import { Inter } from "next/font/google";
import "./globals.css";
import { redirect, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const router = useRouter();
  // router.push("quassoliberum.com/ca");
  redirect("https://quassoliberum.com/ca");
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
