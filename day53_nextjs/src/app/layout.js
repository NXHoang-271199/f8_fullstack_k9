import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log('1');
  return (
    <html lang="en">
      <body>
      <header className="flex justify-center ">
        <h1 className="text-3xl">Local Shop</h1>
      </header>
        {children}
      </body>
    </html>
  );
}