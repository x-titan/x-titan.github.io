"use client"

import Link from "next/link"
import { ThemeToggle } from "../app/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navbar() {
  const navItems = [
    { label: "Главная", href: "#" },
    { label: "Проекты", href: "#projects" },
    { label: "Обо мне", href: "#about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 max-w-6xl mx-auto">
        {/* Логотип */}
        <Link href="/" className="flex items-center space-x-2 font-bold tracking-tight text-xl">
          <span>My<span className="text-primary">Site</span></span>
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Правая часть: Кнопки и мобильное меню */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            Связаться
          </Button>

          {/* Мобильное меню (появляется только на экранах < md) */}
          <div className="md:hidden">
            {/* Здесь временно простая кнопка, позже можно обернуть в Dropdown или Sheet */}
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}