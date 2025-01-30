'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact_us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = async (e) => {
    e.preventDefault();

    if (pathname !== '/') {
      // If not on home page, navigate to home page first
      router.push('/');
      // Wait for navigation to complete
      setTimeout(() => {
        scrollToContact();
      }, 100);
    } else {
      // If already on home page, just scroll
      scrollToContact();
    }
  };

  const navItems = [
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'Services' },
    { href: '#contact_us', label: 'Contact', onClick: handleContactClick },
  ];

  return (
    <div className="border-b sticky top-0 z-50 bg-white">
      <div className="flex h-16 items-center px-4 justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="font-mono">
          <Image src="/Actual_Logo.png" alt="Logo" width={60} height={30} />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.href}
                className={navigationMenuTriggerStyle()}
              >
                {item.onClick ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) =>
                item.onClick ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={item.onClick}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
