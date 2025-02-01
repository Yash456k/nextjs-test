'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact_us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        scrollToContact();
      }, 100);
    } else {
      scrollToContact();
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'Services' },
    { href: '#contact_us', label: 'Contact', onClick: handleContactClick },
  ];

  return (
    <header className="border-b sticky top-0 z-50 bg-white" role="banner">
      <div className="flex h-16 items-center px-4 justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="font-mono" onClick={closeNavbar}>
          <Image 
            src="/Actual_Logo.png" 
            alt="Logo" 
            width={60} 
            height={30}
            priority
          />
        </Link>

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
                    onClick={closeNavbar}
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="text-left mb-4">Navigation Menu</SheetTitle>
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
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
                    onClick={closeNavbar}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;