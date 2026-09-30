/* eslint-disable import/order */
import I18nProvider from "@shared/providers/I18nProvider";
import QueryProvider from "@shared/providers/QueryClientProvider";
import ThemeProvider from "@shared/providers/ThemeProvider";
import type { Children } from "@shared/types/children.types";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { cn } from "@shared/lib/utils";

export const metadata: Metadata = {
  title: "SharkCare Foundation",
  description: "The corporate social responsibility initiative of the Shark Group of Companies."
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full", "antialiased", "font-sans")}>
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider>
            <QueryProvider>
              {children}
              <Toaster position="top-right" />
            </QueryProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
