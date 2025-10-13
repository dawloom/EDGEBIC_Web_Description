'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  CheckCircle,
  ExternalLink,
  Play,
  Quote,
  Star,
  X
} from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Product2Page(): React.JSX.Element {
  const products = [
    {
      name: 'Job Scheduler Lite (JSL)',
      tier: 'Starter',
      price: '$1,000+',
      image:
        'https://www.usersolutions.com/wp-content/uploads/2022/10/starter.png',
      link: '/jsl-job-scheduler-lite',
      features: {
        'Basic Scheduling': true,
        'Forward Scheduling': false,
        'Reverse Scheduling': false,
        'Finite Capacity': true,
        MRP: false,
        'Multi-User': false,
        'Advanced Reports': false,
        'Excel Integration': true,
        Database: false,
        'Custom Fields': false,
        'API Access': false,
        'Heat Maps': false,
        'Drag & Drop': false,
        'Real-time Updates': false,
        'Business Intelligence': false
      }
    },
    {
      name: 'Resource Manager DB',
      tier: 'Advanced',
      price: '$5,000+',
      image:
        'https://www.usersolutions.com/wp-content/uploads/2022/11/advanced-1.png',
      link: '/resource-manager-db-2',
      features: {
        'Basic Scheduling': true,
        'Forward Scheduling': true,
        'Reverse Scheduling': true,
        'Finite Capacity': true,
        MRP: true,
        'Multi-User': true,
        'Advanced Reports': true,
        'Excel Integration': true,
        Database: true,
        'Custom Fields': true,
        'API Access': true,
        'Heat Maps': false,
        'Drag & Drop': false,
        'Real-time Updates': true,
        'Business Intelligence': false
      }
    },
    {
      name: 'EDGEBI (Bundled w/ RMDB)',
      tier: 'Platinum',
      price: '$25,000+',
      image:
        'https://www.usersolutions.com/wp-content/uploads/2022/11/Premium-1.png',
      link: '/edgebi',
      features: {
        'Basic Scheduling': true,
        'Forward Scheduling': true,
        'Reverse Scheduling': true,
        'Finite Capacity': true,
        MRP: true,
        'Multi-User': true,
        'Advanced Reports': true,
        'Excel Integration': true,
        Database: true,
        'Custom Fields': true,
        'API Access': true,
        'Heat Maps': true,
        'Drag & Drop': true,
        'Real-time Updates': true,
        'Business Intelligence': true
      }
    }
  ];

  const testimonials = [
    {
      quote: 'Best choice for MRP and project management software',
      company: 'Sleepmaster Ltd',
      link: '/sleepmaster-ltd'
    },
    {
      quote: 'Manufacturing scheduling software with fantastic support',
      company: 'Cook Compression',
      link: '/cook-compression'
    },
    {
      quote: 'Easy ERP add-on for manufacturing resource planning',
      company: 'Incon Incorporated',
      link: '/incon-incorporate'
    }
  ];

  const featureList = [
    'Basic Scheduling',
    'Forward Scheduling',
    'Reverse Scheduling',
    'Finite Capacity',
    'MRP',
    'Multi-User',
    'Advanced Reports',
    'Excel Integration',
    'Database',
    'Custom Fields',
    'API Access',
    'Heat Maps',
    'Drag & Drop',
    'Real-time Updates',
    'Business Intelligence'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-6">
      {/* Hero Section */}
      <GridSection hideVerticalGridLines>
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <SiteHeading
                badge="Product Comparison"
                title="Production Planning and Scheduling Solutions"
                description="Contact US to discuss which product is the best fit for your application and budget. From a simple Excel based job shop scheduling application to Advanced Planning and Scheduling software (APS) that works either standalone or integrates with your ERP, we look forward to resolving your manufacturing scheduling challenges."
              />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Product Comparison Matrix */}
      <section className="py-6">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-6 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Choose the Right Solution for Your Business
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a Live Demo Today! Choose the product that best suits
              your company's needs.
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse border border-slate-200 dark:border-slate-700">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  <th className="border border-slate-200 p-4 text-left dark:border-slate-700">
                    Features
                  </th>
                  {products.map((product, index) => (
                    <th
                      key={index}
                      className="border border-slate-200 p-4 text-center dark:border-slate-700"
                    >
                      <div className="space-y-3">
                        <div className="relative mx-auto h-16 w-32">
                          <Image
                            src={product.image}
                            alt={`${product.tier} tier`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground">
                            {product.tier}
                          </div>
                          <div className="text-lg font-bold">
                            {product.name}
                          </div>
                          <div className="text-xl font-bold text-slate-900 dark:text-white">
                            {product.price}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                        >
                          <Link href={product.link}>Read More</Link>
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureList.map((feature, featureIndex) => (
                  <tr
                    key={featureIndex}
                    className="hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  >
                    <td className="border border-slate-200 p-4 font-medium dark:border-slate-700">
                      {feature}
                    </td>
                    {products.map((product, productIndex) => (
                      <td
                        key={productIndex}
                        className="border border-slate-200 p-4 text-center dark:border-slate-700"
                      >
                        {product.features[feature] ? (
                          <CheckCircle className="mx-auto size-6 text-green-600" />
                        ) : (
                          <X className="mx-auto size-6 text-red-500" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:hidden">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white p-6 shadow-lg dark:bg-slate-800"
              >
                <div className="mb-6 text-center">
                  <div className="relative mx-auto mb-4 h-16 w-32">
                    <Image
                      src={product.image}
                      alt={`${product.tier} tier`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">
                    {product.tier}
                  </div>
                  <div className="text-lg font-bold">{product.name}</div>
                  <div className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                    {product.price}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    <Link href={product.link}>Read More</Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  {featureList.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{feature}</span>
                      {product.features[feature] ? (
                        <CheckCircle className="size-5 text-green-600" />
                      ) : (
                        <X className="size-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-1max-w-7xl-slate-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by manufacturers worldwide
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800"
              >
                <Quote className="mb-4 size-8 text-slate-400" />
                <blockquote className="mb-4 text-lg font-medium">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <div className="font-semibold">— {testimonial.company}</div>
                  <Button
                    variant="link"
                    className="h-auto p-0"
                  >
                    <Link
                      href={testimonial.link}
                      className="flex items-center gap-1 text-sm"
                    >
                      Read More
                      <ExternalLink className="size-3" />
                    </Link>
                  </Button>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="rounded-2xl border bg-slate-50 p-8 dark:bg-slate-800">
            <h2 className="mb-4 text-3xl font-bold">
              Want to get your production in the groove?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Watch this classic video and get your operations movin' and
              groovin' today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                <Link
                  href="/product-downloads"
                  className="flex items-center gap-2"
                >
                  Free Trial & Sample
                </Link>
              </Button>
              <Button variant="outline">
                <Link
                  href="/contact"
                  className="flex items-center gap-2"
                >
                  Schedule Demo
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <Link
                href="/excel-applications"
                className="text-sm text-muted-foreground hover:underline"
              >
                Other Excel template solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-8 text-center">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                </h2>
                <img
                  src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                  alt="Collection of industry and business awards logos"
                  className="mx-auto h-auto max-w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
