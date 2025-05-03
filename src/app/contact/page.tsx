import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image'; // Import Image component

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              We're here to help with all your lift kit, leveling kit, and auto repair needs. Reach out to us via phone, email, or visit our shop during business hours.
            </p>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">123 Main St, Pelham, AL 35124</p>
                   {/* Placeholder Map - Replace with actual map embed or image */}
                   <div className="mt-4 rounded-lg overflow-hidden border">
                     <Image
                       src="https://picsum.photos/seed/map/600/300" // Placeholder map image
                       alt="Shop Location Map"
                       width={600}
                       height={300}
                       className="w-full h-auto"
                       data-ai-hint="city map location marker"
                     />
                   </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:205-620-3311" className="text-muted-foreground hover:text-primary">(205) 620-3311</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@pelhamauto.com" className="text-muted-foreground hover:text-primary">info@pelhamauto.com</a>
                </div>
              </div>
               <div className="flex items-start space-x-3">
                 <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
                 <div>
                   <h3 className="font-semibold">Business Hours</h3>
                   <p className="text-muted-foreground">Monday - Friday: 8 AM - 6 PM</p>
                   <p className="text-muted-foreground">Saturday: 9 AM - 3 PM</p>
                   <p className="text-muted-foreground">Sunday: Closed</p>
                 </div>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for Contact Form (Can be implemented later) */}
        <Card className="shadow-lg bg-secondary">
          <CardHeader>
            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
             {/* Future implementation of a contact form */}
            <p className="text-muted-foreground text-center py-10">Contact form coming soon! Please call or email us for now.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
