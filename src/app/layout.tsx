import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme/provider";
import { ThemeSwitch } from "@/components/theme/switch";
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute top-0 right-0 p-4 z-50">
            <ThemeSwitch />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
