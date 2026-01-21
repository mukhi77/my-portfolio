import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arman Mukhi | Engineering Portfolio",
  description: "Engineering experience, projects, posts, and achievements.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {/* Top Nav */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              Arman Mukhi
            </Link>

            <nav className="flex items-center gap-5">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/posts">Posts</NavLink>
              <NavLink href="/achievements">Achievements</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>
        </header>

        {/* Page Container */}
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Arman Mukhi</span>
              <span className="text-slate-400">
                Built with Next.js + Tailwind
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
