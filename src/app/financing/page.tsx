import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function FinancingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Financing Options Available</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Don't let cost hold you back from getting the upgrades your vehicle deserves. We offer flexible financing options to make your lift kit, leveling kit, or auto repairs more affordable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <DollarSign className="h-10 w-10 text-primary" />
            <CardTitle className="text-2xl">Easy Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our financing partners offer simple and quick online applications. Get pre-approved in minutes without impacting your credit score.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
             <CheckCircle className="h-10 w-10 text-primary" />
            <CardTitle className="text-2xl">Flexible Payment Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Choose from various payment plans that fit your budget. We work with reputable lenders to find the best rates for you.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Contact us today to learn more about our financing options and how we can help you get the services you need.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contact">Contact Us for Details</Link>
        </Button>
      </div>
    </div>
  );
}
