import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme/provider";
import { ThemeSwitch } from "@/components/theme/switch";
import * as fonts from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type React from "react";

export const metadata = {
  title: "FinalSpaces - Digital Epitaphs & Commemorative Media",
  description:
    "FinalSpaces combines compassion, experience in the grieving process, and advanced technology to make the process of dying less overwhelming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fonts.body.variable, fonts.heading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-0 right-0 p-4 z-50">
            <ThemeSwitch />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
