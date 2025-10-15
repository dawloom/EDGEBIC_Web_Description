import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title:
    'Amish Easily Adopt, Rapidly Amortize New Production Scheduling System | User Solutions',
  description:
    'See how Homestead Furniture successfully implemented modern production scheduling while honoring traditional Amish values.',
  openGraph: {
    title:
      'Amish Easily Adopt, Rapidly Amortize New Production Scheduling System | User Solutions',
    description:
      'See how Homestead Furniture successfully implemented modern production scheduling while honoring traditional Amish values.',
    url: 'https://www.usersolutions.com/success-stories/amish-easily-adopt-rapidly-amortize-new-production-scheduling-system'
  }
};

export default function AmishProductionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="outline"
              className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
            >
              Success Story
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Amish Easily Adopt, Rapidly Amortize New Production Scheduling
              System
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
              Discover how traditional Amish craftsmanship meets modern
              production scheduling at Homestead Furniture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-700 dark:text-gray-300">
                Nestled quietly in the heart of Ohio's Amish countryside is a
                furniture destination, offering an eclectic showroom of
                hand-crafted selections in the modern, rustic, traditional,
                transitional, live edge, and contemporary styles, a tour of the
                factory to witness Amish artisans using the 'heirloom' approach
                to woodcraft, and relaxation by the tranquil waterfall in their
                gardens, to see the trees from which they build their American
                hardwood furniture.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                Homestead Furniture's core values reflect the local culture of
                craftsmanship and fair business dealings. They are surrounded by
                people who turn, bend, stain, carve and otherwise craft
                hardwoods to create fine furniture. And when they talk business,
                they talk about improving methodologies and techniques to make
                better furniture, in lieu of ways to set up offshore
                manufacturing.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Improvements
              </h2>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>On the fabrication technique side:</strong> AmishBilt™
                heirloom approach, proprietary Protekt™ finishing, cutting edge
                color lab for proprietary paint and stain shades, advanced
                stressing operations.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>On the manufacturing methodological side:</strong>
                Implementing the Kaizen cell method of manufacturing, lean
                inventory management, continuous improvement principles, Six
                Sigma tactics.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Last Hurdle
              </h2>

              <p className="text-gray-700 dark:text-gray-300">
                With all these advanced techniques and methodologies in place,
                the antiquated production scheduling system surfaced as a
                bottleneck holding them back. The current process was a full
                time job, highly susceptible to human error due to a myriad of
                disparate and disconnected spreadsheets and workbooks. But with
                no Internet access or factory computers not any replacement
                would do.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                The article published in FDMC Magazine describes how a 40
                hr/week production scheduling task, requiring an experienced
                production scheduler, was reduced to a mere 2 hour task by the
                office clerk for the basic weekly schedule, leaving only a 4 – 6
                hour task for the production scheduler to address the typical
                unexpected changes that occur in process. Of added interest, the
                article tells the story of how the software implementation alone
                identified a manufacturing bottleneck. Addressing it not only
                optimized their processing, but also they were able to
                reconfigure the new system 'on-the-fly' to match the new
                routings. And last, but not least, the flexibility of the system
                facilitated their maintaining their familiar way of doing
                things, insuring rapid adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card className="rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-8 text-center">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                </h2>
                <div className="relative mx-auto h-auto w-full max-w-4xl">
                  <Image
                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                    alt="Collection of industry and business awards logos"
                    width={1024}
                    height={128}
                    className="mx-auto h-auto max-w-full"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
