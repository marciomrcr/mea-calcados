"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Masculinos", href: "#masculino" },
  { label: "Femininos", href: "#feminino" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Nike" width={32} height={32} priority />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="p-2 md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/mea-reduzida.png"
              alt="Nike"
              width={80}
              height={60}
              priority
            />
          </Link>
          <span className="md:text-3xl text-center text-muted text-xl font-bold text-gray-900">
            M & A Calcados
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex mr-32">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-gray-500" />
          ) : (
            <Menu className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-6 space-y-6">
            {/* Navigation Links */}
            <div className="space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
          </div>
        </div>
      )}
    </header>
  );
}
