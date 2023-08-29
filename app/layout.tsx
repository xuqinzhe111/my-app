import React, { ReactNode } from 'react';
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/app/globals.css";

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
