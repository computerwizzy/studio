import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <Link href="/" className="inline-block mb-6">
           <Image
            src="https://picsum.photos/seed/footerlogo/150/40" // Placeholder logo
            alt="Pelham Auto Outfitters Logo"
            width={150}
            height={40}
            className="h-auto w-auto"
            data-ai-hint="company logo simple"
           />
        </Link>
         <nav className="mb-4 flex justify-center space-x-4 text-sm">
           <Link href="/" className="hover:text-primary">Home</Link>
           <Link href="/gallery" className="hover:text-primary">Gallery</Link>
           <Link href="/quote" className="hover:text-primary">Get Quote</Link>
           <Link href="/contact" className="hover:text-primary">Contact</Link>
         </nav>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Pelham Auto Outfitters. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
