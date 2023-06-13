import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Kanban",
  description: "Developed by Getting Better ORG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-theme-dark-800 ${jakarta.variable} font-sans text-white`}
      >
        {children}
      </body>
    </html>
  );
}
