import "./globals.css";

import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Navbar from "./navbar/navbar";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Box, Theme } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "ReBreathe",
  description: "Virtual Pulmonary Therapy",
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={nunito.variable}>
      <body>
        <Provider>
          <Theme appearance="light">
            <Box position="relative">
              <Toaster />
              <Navbar />
              {children}
            </Box>
          </Theme>
        </Provider>
      </body>
    </html>
  );
}
