'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/70'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="KrishiMitra Logo" width={40} height={40} />
            <span className="text-xl font-bold text-foreground">KrishiMitra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/farmer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Farmers
            </Link>
            <Link
              href="/consumer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Consumers
            </Link>
            <Link
              href="/news"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              News
            </Link>
            <Link
              href="/call-center"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Call Center
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>

            {isLoading ? (
              <div className="w-24 h-10 bg-foreground/5 rounded-md animate-pulse"></div>
            ) : isAuthenticated ? (
              <Link 
                href="/profile"
                className="flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors"
              >
                {session?.user?.image ? (
                  <Image 
                    src={session.user.image} 
                    alt={session.user.name || 'User'} 
                    width={24} 
                    height={24} 
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-xs">
                    {session?.user?.name?.[0] || 'U'}
                  </div>
                )}
                <span className="text-sm font-medium">
                  Profile
                </span>
              </Link>
            ) : (
              <Link 
                href="/auth/signin"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6 text-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6 text-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-foreground/10">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/farmer"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Farmers
                </Link>
              </li>
              <li>
                <Link 
                  href="/consumer"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Consumers
                </Link>
              </li>
              <li>
                <Link 
                  href="/news"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link 
                  href="/call-center"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Call Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-foreground/10">
                {isLoading ? (
                  <div className="w-full h-10 bg-foreground/5 rounded-md animate-pulse"></div>
                ) : isAuthenticated ? (
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {session?.user?.image ? (
                      <Image 
                        src={session.user.image} 
                        alt={session.user.name || 'User'} 
                        width={24} 
                        height={24} 
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-xs">
                        {session?.user?.name?.[0] || 'U'}
                      </div>
                    )}
                    <span className="text-sm font-medium">
                      My Profile
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/auth/signin"
                    className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
} 