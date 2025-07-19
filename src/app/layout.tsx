import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Navbar from "./navbar/navbar";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Theme } from "@chakra-ui/react";
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
          <Theme appearance="light">
            <Toaster />
            <Navbar />
            {children}
          </Theme>
        </Provider>
      </body>
    </html>
  );
}
