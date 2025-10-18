import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  CheckCircle,
  Handshake,
  Star,
  Users
} from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function CookCompressionPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <GridSection hideVerticalGridLines>
        <div className="container pt-6">
          <div className="mx-auto max-w-7xl">
            {/* Company Logo */}

            <div className="mb-6 text-center">
              <SiteHeading
                badge="Customer Testimonial"
                title="Cook Compression"
                description="Manufacturing Scheduling Software with Fantastic Support"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                A real customer experience showcasing world-class support and
                manufacturing software excellence
              </p>
            </div>

            <div className="mb-6 text-center">
              <Image
                src="https://www.usersolutions.com/wp-content/uploads/2022/07/cook.jpg"
                alt="Cook Compression Logo"
                width={200}
                height={120}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Customer Testimonial */}
      <section className="pt-6">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Main Testimonial */}
          <Card className="mb-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Star className="size-6 fill-yellow-400 text-yellow-400" />
                Customer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-center gap-2">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
              </div>
              <blockquote className="space-y-4 text-lg italic leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  "I feel thankful. For cause, I am dubious when dealing with
                  enterprises and guarantees by long distance; more so when
                  considering the promises made by others for software
                  solutions, sight unseen."
                </p>
                <p>
                  "My experience with User Solutions, Inc. has set a higher
                  standard for my internet business dealings and software vendor
                  expertise. Your premier product is in support and service.
                  Your software reflects this."
                </p>
                <p>
                  "The Product and Sales personnel at User Solutions, Inc. are
                  world class in response, knowledge, and support of your
                  product line in meeting my company's need."
                </p>
                <p>
                  "Your Company's faithfulness has been high in fidelity and
                  your follow through timely. I will whole heartedly recommend
                  User Solutions as I see need in my business community."
                </p>
              </blockquote>
            </CardContent>
          </Card>

          {/* Complete Testimonial */}
          <Card className="mb-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20">
            <CardHeader>
              <CardTitle>Complete Customer Testimonial</CardTitle>
              <CardDescription>
                The full experience from Cook Compression about working with
                User Solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  I feel thankful. For cause, I am dubious when dealing with
                  enterprises and guarantees by long distance; more so when
                  considering the promises made by others for software
                  solutions, sight unseen.
                </p>
                <p>
                  My experience with User Solutions, Inc. has set a higher
                  standard for my internet business dealings and software vendor
                  expertise. Your premier product is in support and service.
                  Your software reflects this.
                </p>
                <p>
                  The Product and Sales personnel at User Solutions, Inc. are
                  world class in response, knowledge, and support of your
                  product line in meeting my company's need.
                </p>
                <p>
                  Your Company's faithfulness has been high in fidelity and your
                  follow through timely. I will whole heartedly recommend User
                  Solutions as I see need in my business community.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          <div className="mb-6 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="size-6 text-green-600" />
                  Premier Support & Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="mb-4 text-slate-700 dark:text-slate-300">
                  "Your premier product is in support and service. Your software
                  reflects this."
                </blockquote>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Premier product in support and service
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Software quality that reflects excellent support
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Higher standard for software vendor expertise
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-6 text-purple-600" />
                  World-Class Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="mb-4 text-slate-700 dark:text-slate-300">
                  "The Product and Sales personnel at User Solutions, Inc. are
                  world class in response, knowledge, and support of your
                  product line in meeting my company's need."
                </blockquote>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-purple-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      World class in response
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-purple-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      World class in knowledge
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-purple-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      World class support of product line
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust & Reliability */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="size-6 text-orange-600" />
                Trust & Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="mb-4 text-lg text-slate-700 dark:text-slate-300">
                "Your Company's faithfulness has been high in fidelity and your
                follow through timely. I will whole heartedly recommend User
                Solutions as I see need in my business community."
              </blockquote>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-2xl font-bold text-orange-600">
                    High Fidelity
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Company's faithfulness
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-2xl font-bold text-orange-600">
                    Timely
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Prompt follow through
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-2xl font-bold text-orange-600">
                    Recommended
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Whole heartedly endorsed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Testimonial Quote */}
          <Card className="mb-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
            <CardContent className="p-8 text-center">
              <blockquote className="mb-4 text-xl text-slate-700 dark:text-slate-300">
                "Manufacturing scheduling software with fantastic support"
              </blockquote>
              <cite className="text-lg font-medium text-slate-900 dark:text-white">
                — Cook Compression
              </cite>
            </CardContent>
          </Card>

          {/* Why Choose User Solutions */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What Sets User Solutions Apart</CardTitle>
              <CardDescription>
                The qualities that make us a trusted partner for manufacturing
                businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    🏆 Higher Standards
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Setting new benchmarks for internet business dealings and
                    software vendor expertise.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    🤝 Trustworthy Partnership
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Building long-term relationships based on reliability and
                    consistent delivery.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    💡 Expert Knowledge
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    World-class expertise in manufacturing scheduling and
                    resource planning solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    ⚡ Responsive Support
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Premier support and service that reflects in our software
                    quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 25 Years Anniversary with Real Award Logos */}
          <div className="mb-6 text-center">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
            </h3>
            <div className="flex justify-center">
              <img
                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                alt="Collection of industry and business awards logos"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Experience World-Class Manufacturing Software Support
            </h3>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
              Join Cook Compression and hundreds of other satisfied customers
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/resource-manager-db">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
