import type { Metadata } from "next";
import Link from "next/link";

import { ScrollToTopOnRouteChange } from "@/components/ScrollToTopOnRouteChange";

import "./globals.css";

export const metadata: Metadata = {
  title: "IT사역팀 소개",
  description: "IT사역팀 비전과 팀원 정보를 소개하는 웹사이트입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full bg-stone-950 text-slate-950 flex flex-col">
        <ScrollToTopOnRouteChange />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
            <Link href="/" className="flex items-center gap-3 text-white">
              <span className="text-base font-semibold tracking-tight">
                Command
              </span>
            </Link>
            <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-medium text-stone-300">
              <Link
                href="/"
                className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                팀 소개
              </Link>
              <Link
                href="/members"
                className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                팀원 소개
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
