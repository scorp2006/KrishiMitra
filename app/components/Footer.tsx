import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-muted py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="mb-6 flex flex-col items-center">
            <Image 
              src="/logo.png" 
              alt="KrishiMitra AI Logo" 
              width={60} 
              height={60} 
              className="rounded-full"
            />
            <span className="mt-2 text-xl font-medium text-primary">KrishiMitra</span>
          </Link>
          
          <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#impact" className="text-foreground/80 hover:text-primary transition-colors">
              Impact
            </Link>
            <Link href="#revenue" className="text-foreground/80 hover:text-primary transition-colors">
              Revenue Model
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <p className="text-sm text-foreground/60 text-center">
            &copy; {currentYear} KrishiMitra AI. All rights reserved.
          </p>
          <p className="text-xs text-foreground/60 mt-1 text-center">
            Empowering Smallholder Farmers with AI Technology
          </p>
        </div>
      </div>
    </footer>
  );
} 