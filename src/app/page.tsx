import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Wrench, Users, MapPin, Phone, Clock, Star, Car, Settings, Award, Wifi, Calendar, LifeBuoy } from 'lucide-react'; // Import necessary icons

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-900 to-black text-white">
        <Image
          src="https://picsum.photos/seed/heroTruck/1920/1080"
          alt="Truck with lift kit"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-30 z-0"
          priority
          data-ai-hint="lifted truck dramatic"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Overlay */}
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Your Trusted Lift Kits & Leveling Kits Experts in Pelham</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md">Professional installation with guaranteed satisfaction</p>
          <ul className="list-none space-y-2 mb-8 inline-block text-left mx-auto md:mx-0">
            <li className="flex items-center text-base md:text-lg"><Check className="text-primary mr-2 h-5 w-5" />Quality Products</li>
            <li className="flex items-center text-base md:text-lg"><Check className="text-primary mr-2 h-5 w-5" />Professional Installation</li>
            <li className="flex items-center text-base md:text-lg"><Check className="text-primary mr-2 h-5 w-5" />Competitive Pricing</li>
          </ul>
          <div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/quote">GET A FREE QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold">YEARS OF EXPERIENCE WITH LIFT KITS & LEVELING KITS EXPERTISE</h2>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Save on Lift Kits & Leveling Kits<br />With Our New Customer Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Lift Kit', 'Leveling Kit', 'Suspension Kit', 'Accessory Kit'].map((kit) => (
              <Card key={kit} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src={`https://picsum.photos/seed/${kit.toLowerCase().replace(' ', '')}/400/300`}
                    alt={`${kit} Product`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                     data-ai-hint={`${kit.toLowerCase()} automotive parts`}
                  />
                  <CardTitle className="text-xl font-semibold">{kit}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="default" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/quote">LEARN MORE</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Lift Kits & Leveling Kits Services</h2>
            <p className="text-muted-foreground mb-6">We provide professional installation of top-quality lift kits and leveling kits for all makes and models. Our experienced technicians ensure proper installation and adjustment for optimal performance.</p>
            <ul className="list-none space-y-3 mb-8">
              <li className="flex items-center"><Check className="text-primary mr-3 h-5 w-5" />Expert Installation</li>
              <li className="flex items-center"><Check className="text-primary mr-3 h-5 w-5" />Quality Parts</li>
              <li className="flex items-center"><Check className="text-primary mr-3 h-5 w-5" />Warranty Service</li>
              <li className="flex items-center"><Check className="text-primary mr-3 h-5 w-5" />Alignment Check</li>
            </ul>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/quote">GET A FREE QUOTE</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://picsum.photos/seed/serviceTruck/600/450"
              alt="Truck undergoing lift kit service"
              width={600}
              height={450}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              data-ai-hint="truck mechanic service bay"
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">End of Story With Our Unbeatable Lift Kits & Leveling Kits Satisfaction Guarantee</h2>
          <div className="mb-12 inline-flex items-center justify-center w-40 h-40 rounded-full bg-primary border-4 border-white shadow-lg">
            <p className="font-bold text-center text-sm leading-tight px-4">100% SATISFACTION GUARANTEED</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary mb-2">QUALITY & WORKMANSHIP GUARANTEE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We stand behind all our work with a comprehensive warranty.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardHeader>
                 <CardTitle className="text-xl font-semibold text-primary mb-2">PREMIUM GUARANTEE ON PRODUCTS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We only use top-quality products that are built to last.</p>
              </CardContent>
            </Card>
          </div>
          <Button asChild size="lg" className="mt-12 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/quote">GET YOUR QUOTE</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Why Trust Your Top Choice for Lift Kits & Leveling Kits?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-6">
                <div className="bg-secondary p-4 rounded-full mb-4 inline-flex">
                    <Car className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wheel of Lifting Leader Kits Solutions</h3>
                <p className="text-muted-foreground">Comprehensive solutions for all your lifting needs</p>
                </div>
                <div className="flex flex-col items-center p-6">
                <div className="bg-secondary p-4 rounded-full mb-4 inline-flex">
                    <Settings className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Suspension Tools for Superior Performance</h3>
                <p className="text-muted-foreground">Latest technology for optimal vehicle performance</p>
                </div>
                <div className="flex flex-col items-center p-6">
                <div className="bg-secondary p-4 rounded-full mb-4 inline-flex">
                   <Wrench className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Excellence in Off-Road Applications</h3>
                <p className="text-muted-foreground">Expert knowledge for the perfect off-road setup</p>
                </div>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-12 border-primary text-primary hover:bg-primary/10">
                <Link href="/about">FAMILY OWNED BUSINESS</Link>
            </Button>
            </div>
        </section>


      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Why Bring Your Car to Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Card className="text-center shadow-lg p-6">
               <CardHeader className="items-center">
                 <Award className="h-12 w-12 text-primary mb-4" />
                 <CardTitle className="text-xl font-semibold">Lift Kits Expertise</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground">Our technicians specialize in all types of lift kits and leveling solutions</p>
               </CardContent>
             </Card>
             <Card className="text-center shadow-lg p-6">
                <CardHeader className="items-center">
                   <Wrench className="h-12 w-12 text-primary mb-4" />
                   <CardTitle className="text-xl font-semibold">Reliable Auto Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground">Complete automotive service for all your vehicle needs</p>
                </CardContent>
             </Card>
          </div>
          <Button asChild size="lg" className="mt-12 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/quote">GET YOUR QUOTE</Link>
          </Button>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Your Go-To Car Repair Shop for Reliable Service</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="flex flex-col items-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4 inline-flex">
                   <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Master Repair Technicians</h3>
                <p className="text-muted-foreground text-sm">Highly trained professionals with years of experience</p>
             </div>
             <div className="flex flex-col items-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4 inline-flex">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Customer-Centric Approach</h3>
                <p className="text-muted-foreground text-sm">We put your needs and satisfaction first</p>
             </div>
             <div className="flex flex-col items-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4 inline-flex">
                   <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Certified At-Par Equipment</h3>
                <p className="text-muted-foreground text-sm">Using only the best tools and technology</p>
             </div>
          </div>
           <Button asChild variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
            <Link href="/financing">SEE CREDIT WORKED</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Again Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Why Bring Your Car to Us?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-8">
             {[
               { icon: LifeBuoy , text: "Lifetime Warranty on Parts & Labor" },
               { icon: Calendar, text: "24/7 Online Scheduling" },
               { icon: Car, text: "Free Shuttle Service" },
               { icon: Award, text: "Certified ASE Technicians" },
               { icon: Users, text: "Family-Owned Business" },
               { icon: Wifi, text: "Free WiFi in Waiting Room" },
               { icon: Check, text: "Free Working Check" },
               { icon: ShieldCheck, text: "Customer Loyalty Program" },
             ].map((item, index) => (
               <div key={index} className="flex flex-col items-center">
                 <div className="bg-white p-3 rounded-full mb-3 inline-flex">
                   <item.icon className="h-6 w-6 text-primary" />
                 </div>
                 <p className="text-sm font-medium">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

       {/* Guarantee Banner */}
       <section className="py-16 md:py-24 bg-secondary">
         <div className="container mx-auto px-4 text-center max-w-3xl">
           <h2 className="text-3xl md:text-4xl font-semibold mb-6">Drive Confidently With Our Lift Kits & Leveling Kits GUARANTEE</h2>
           <p className="text-muted-foreground mb-8">We stand behind our work with an industry-leading guarantee that ensures your complete satisfaction. Our commitment to quality means you can trust us to get the job done right the first time.</p>
           <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
             <Link href="/quote">GET YOUR QUOTE</Link>
           </Button>
         </div>
       </section>

      {/* Appointment Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
             <Image
              src="https://picsum.photos/seed/appointment/600/400"
              alt="Mechanic working on a truck"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              data-ai-hint="mechanic consultation customer service"
            />
          </div>
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Schedule Your Appointment Today</h2>
            <p className="text-muted-foreground mb-8">Our team is ready to help you get the perfect lift or leveling kit for your vehicle. Contact us today to schedule a consultation or installation appointment.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/quote">GET YOUR QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Phone Banner */}
       <div className="bg-primary text-primary-foreground py-4">
         <div className="container mx-auto px-4 text-center">
           <h3 className="text-lg md:text-xl font-semibold flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
             <span className="flex items-center"><Phone className="inline-block mr-2 h-5 w-5" /> (205) 555-5555</span>
             <span className="hidden sm:inline">•</span>
             <span className="flex items-center"><MapPin className="inline-block mr-2 h-5 w-5" /> 123 Main St, Pelham, AL</span>
           </h3>
         </div>
       </div>

      {/* Testimonials */}
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                { name: "John D.", text: "Great service and quality installation. My truck looks and performs better than ever!" },
                { name: "Sarah M.", text: "Professional team that knows their stuff. Highly recommend for any lift kit needs." },
                { name: "Mike T.", text: "Fair pricing and excellent workmanship. Will definitely return for future upgrades." },
                { name: "Amanda K.", text: "They helped me choose the perfect kit for my needs and installed it perfectly." },
                { name: "Chris P.", text: "Best shop in town for lift kits. These guys know what they're doing!" },
                { name: "Emily R.", text: "Quick turnaround and very knowledgeable staff. Made the whole process easy." }, // Added one more for better grid filling
                ].slice(0, 6).map((testimonial, index) => ( // Display up to 6 testimonials
                <Card key={index} className="shadow-lg flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    </div>
                    <p className="font-semibold text-right">- {testimonial.name}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

      {/* Gallery/Visit Section */}
       <section className="py-16 md:py-24 bg-background">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h3 className="text-2xl font-semibold mb-6">Visit Our Shop</h3>
             <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center"><Clock className="mr-2 h-5 w-5 text-primary" /> Monday to Friday: 8 AM - 6 PM</p>
                <p className="flex items-center"><Clock className="mr-2 h-5 w-5 text-primary" /> Saturday: 9 AM - 3 PM</p>
                <p className="flex items-center"><Clock className="mr-2 h-5 w-5 text-primary" /> Sunday: Closed</p>
                <p className="flex items-center pt-2"><MapPin className="mr-2 h-5 w-5 text-primary" /> 123 Main St, Pelham, AL 35124</p>
             </div>
             <Button asChild variant="outline" className="mt-8 border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">GET DIRECTIONS</Link>
             </Button>
           </div>
           <div>
             <Image
              src="https://picsum.photos/seed/shopExterior/600/400"
              alt="Exterior of the auto shop"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              data-ai-hint="auto repair shop exterior building"
            />
           </div>
         </div>
       </section>
    </>
  );
}
