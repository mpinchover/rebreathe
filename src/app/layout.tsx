import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Navbar from "./navbar/navbar";
import { Toaster, toaster } from "@/components/ui/toaster";

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
          <Toaster />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
