import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Navbar from "./navbar/navbar";

export const metadata: Metadata = {
  title: "ReBreathe",
  description: "Virtual Pulmonary Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
