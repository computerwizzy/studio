import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Sample data for gallery items
const galleryItems = [
  { id: 1, title: 'Lifted Ford F-150', description: '6-inch lift kit installation', imageUrl: 'https://picsum.photos/seed/fordf150/600/400', aiHint: 'lifted ford truck' },
  { id: 2, title: 'Leveled Chevy Silverado', description: 'Front leveling kit for a balanced stance', imageUrl: 'https://picsum.photos/seed/chevysilverado/600/400', aiHint: 'leveled chevy truck' },
  { id: 3, title: 'Lifted Jeep Wrangler', description: 'Ready for off-roading adventures', imageUrl: 'https://picsum.photos/seed/jeepwrangler/600/400', aiHint: 'lifted jeep wrangler offroad' },
  { id: 4, title: 'Toyota Tacoma with Lift', description: 'Improved ground clearance and aggressive look', imageUrl: 'https://picsum.photos/seed/toyotatacoma/600/400', aiHint: 'lifted toyota truck' },
  { id: 5, title: 'RAM 1500 Leveled', description: 'Perfectly leveled RAM truck', imageUrl: 'https://picsum.photos/seed/ram1500/600/400', aiHint: 'leveled ram truck' },
  { id: 6, title: 'GMC Sierra Lift Kit', description: 'Custom lift kit for enhanced performance', imageUrl: 'https://picsum.photos/seed/gmcsierra/600/400', aiHint: 'lifted gmc truck' },
  { id: 7, title: 'Nissan Titan Lifted', description: 'Aggressive stance for this Titan', imageUrl: 'https://picsum.photos/seed/nissantitan/600/400', aiHint: 'lifted nissan truck' },
  { id: 8, title: 'Subaru Outback Lifted', description: 'Ready for the trails', imageUrl: 'https://picsum.photos/seed/subaruoutback/600/400', aiHint: 'lifted subaru suv' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Work Gallery</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Check out some of the vehicles we've worked on. See the quality and difference our lift kits and leveling kits make.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
                data-ai-hint={item.aiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
