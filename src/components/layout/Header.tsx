import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="bg-black text-white py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="shrink-0">
          <Image
            src="https://res.cloudinary.com/dcwwi6uwp/image/upload/v1746277751/logo-_1__taigon.png" // Updated logo URL
            alt="Pelham Auto Outfitters Logo"
            width={200}
            height={50}
            className="h-auto w-auto max-w-[150px] sm:max-w-[200px]"
            priority // Load logo quickly
          />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
           <span className="font-bold text-sm lg:text-base whitespace-nowrap">Call Us Now! (205) 555-5555</span>
           <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
             <Link href="/quote">FREE ESTIMATE</Link>
           </Button>
        </div>
         <div className="md:hidden">
           <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
             <Link href="/quote">QUOTE</Link>
           </Button>
         </div>
      </div>
    </header>
  );
}
