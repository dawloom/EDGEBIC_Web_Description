'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  email: z.string().email('Valid email is required'),
  phone: z.string().max(32).optional(),
  company: z.string().max(255).optional(),
  message: z.string().max(5000).optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Thank you for contacting us! We'll get back to you within 24 hours."
        );
        reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="outline"
              className="mb-4 h-8 rounded-full border-white/30 bg-white/10 px-3 text-sm font-medium text-white shadow-sm hover:bg-white/20"
            >
              Get in Touch
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact US
            </h1>
            <p className="text-xl text-white/90">
              Let's discuss your manufacturing scheduling needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left Column - Description and Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Let's Discuss YOUR Processes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Instead of a one size fits all approach, lets discuss YOUR
                    processes and challenges and explore situations to fit YOUR
                    WAY. We can even use your data during a live demo meeting.
                    Contact US by filling out the form below and we will be in
                    touch to prepare custom demo.
                  </p>

                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Schedule a quick call to discuss your application.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Schedule a live, custom demo (We will be in contact to
                      understand your application and obtain your actual
                      data/reports).
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      We'll be periodically sending you updates about our new
                      products and features
                    </li>
                  </ul>

                  {/* Contact Form */}
                  <div className="rounded-lg bg-muted/50 p-6 dark:bg-muted/20">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          {...register('company')}
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your Company Name"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.company.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          {...register('message')}
                          rows={4}
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Tell us about your manufacturing scheduling needs..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Right Column - Image and Tagline */}
              <div className="flex flex-col items-center justify-center space-y-6">
                <img
                  src="https://www.usersolutions.com/wp-content/uploads/2022/09/side.png"
                  alt="Colorful abstract silhouette, Sleep Master logo, people and cityscape"
                  className="h-auto max-h-[950px] w-full rounded-lg object-contain shadow-lg"
                />
                <p className="text-center  text-lg font-bold text-slate-900 dark:text-white">
                  The perfect complement for companies of any size… from Job
                  Shops to Small-Medium Manufacturers to Global Multi-Nationals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-8 text-center">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                </h2>
                <img
                  src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                  alt="Collection of industry and business awards logos"
                  className="mx-auto h-auto max-h-32 max-w-full object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
