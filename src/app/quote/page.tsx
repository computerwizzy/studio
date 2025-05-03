'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast"; // Import useToast

const currentYear = new Date().getFullYear();

const quoteFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  vehicleMake: z.string().min(1, { message: 'Vehicle make is required.' }),
  vehicleModel: z.string().min(1, { message: 'Vehicle model is required.' }),
  vehicleYear: z.coerce // Use coerce to convert input string to number
    .number({ invalid_type_error: 'Year must be a number.' })
    .min(1950, { message: 'Year must be 1950 or later.' })
    .max(currentYear + 1, { message: `Year cannot be later than ${currentYear + 1}.` }),
  serviceTypeLiftKit: z.boolean().default(false),
  serviceTypeLevelingKit: z.boolean().default(false),
  serviceTypeOther: z.boolean().default(false),
  details: z.string().max(500, { message: 'Details cannot exceed 500 characters.' }).optional(),
}).refine(data => data.serviceTypeLiftKit || data.serviceTypeLevelingKit || data.serviceTypeOther, {
  message: "Please select at least one service type.",
  path: ["serviceTypeLiftKit"], // You can attach the error to one of the checkboxes or a general field
});


export default function QuotePage() {
   const { toast } = useToast(); // Initialize useToast

  const form = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: undefined, // Initialize year as undefined or currentYear
      serviceTypeLiftKit: false,
      serviceTypeLevelingKit: false,
      serviceTypeOther: false,
      details: '',
    },
  });

  // Placeholder submit handler
  function onSubmit(values: z.infer<typeof quoteFormSchema>) {
    console.log(values);
     // Display a success toast message
     toast({
       title: "Quote Request Submitted!",
       description: "Thank you for your request. We will get back to you shortly.",
     });
    // Here you would typically send the data to your backend or an email service
    form.reset(); // Reset form after submission
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl">Request a Free Quote</CardTitle>
          <CardDescription>
            Fill out the form below with your vehicle details, and we'll get back to you with an estimate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-4">
                 <h3 className="text-lg font-semibold border-b pb-2">Your Contact Information</h3>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                            <Input type="tel" placeholder="(555) 555-5555" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
              </div>

              {/* Vehicle Info */}
               <div className="space-y-4">
                 <h3 className="text-lg font-semibold border-b pb-2">Vehicle Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="vehicleMake"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Make</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., Ford" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="vehicleModel"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Model</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., F-150" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="vehicleYear"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Year</FormLabel>
                            <FormControl>
                             <Input type="number" placeholder={`e.g., ${currentYear}`} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                 </div>
               </div>


               {/* Service Type */}
               <div className="space-y-4">
                 <h3 className="text-lg font-semibold border-b pb-2">Service(s) Interested In</h3>
                 <FormItem className="space-y-3">
                    <FormField
                        control={form.control}
                        name="serviceTypeLiftKit"
                        render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Lift Kit Installation</FormLabel>
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="serviceTypeLevelingKit"
                        render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Leveling Kit Installation</FormLabel>
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="serviceTypeOther"
                        render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Other / Unsure (Please specify below)</FormLabel>
                        </FormItem>
                        )}
                    />
                     {/* Display error message for service type selection */}
                     {form.formState.errors.serviceTypeLiftKit && (
                        <p className="text-sm font-medium text-destructive">{form.formState.errors.serviceTypeLiftKit.message}</p>
                      )}
                 </FormItem>
               </div>


              {/* Additional Details */}
                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Additional Details (Optional)</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Tell us more about what you're looking for (e.g., desired lift height, specific brand, intended use - daily driving, off-roading, etc.)"
                            className="resize-y min-h-[100px]"
                            {...field}
                        />
                        </FormControl>
                        <FormDescription>
                        Maximum 500 characters.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Submit Quote Request
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
