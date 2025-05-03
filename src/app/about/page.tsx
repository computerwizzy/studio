import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Award } from 'lucide-react'; // Import relevant icons

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pelham Auto Outfitters</h1>
          <p className="text-lg text-muted-foreground mb-4">
            We are a family-owned and operated business located right here in Pelham, Alabama. For years, we've been dedicated to providing top-quality automotive services with a focus on lift kits, leveling kits, and general auto repairs.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our passion for vehicles and commitment to customer satisfaction drives everything we do. We treat every car like it's our own, ensuring quality workmanship and using only the best parts available.
          </p>
           <p className="text-lg text-muted-foreground">
             Whether you're looking to enhance your truck's appearance and capability or need reliable maintenance, our certified technicians are here to help.
           </p>
        </div>
        <div>
           <Image
            src="https://picsum.photos/seed/aboutShop/600/450"
            alt="Inside the Pelham Auto Outfitters shop"
            width={600}
            height={450}
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            data-ai-hint="auto repair shop interior tools"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="text-center shadow-lg p-6">
          <CardHeader className="items-center">
            <Award className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-xl font-semibold">Quality Workmanship</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We take pride in our work, ensuring every job is done right the first time with attention to detail.</p>
          </CardContent>
        </Card>
         <Card className="text-center shadow-lg p-6">
           <CardHeader className="items-center">
             <Users className="h-12 w-12 text-primary mb-4" />
             <CardTitle className="text-xl font-semibold">Customer Focus</CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-muted-foreground">Your satisfaction is our priority. We listen to your needs and provide honest recommendations.</p>
           </CardContent>
         </Card>
        <Card className="text-center shadow-lg p-6">
          <CardHeader className="items-center">
             <MapPin className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-xl font-semibold">Community Roots</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">As a local Pelham business, we're proud to serve our neighbors and contribute to our community.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
