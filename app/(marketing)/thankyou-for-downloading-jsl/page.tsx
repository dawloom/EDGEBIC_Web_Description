import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ThankYouJSLPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <Badge
              variant="outline"
              className="mb-6 h-8 rounded-full border-white/30 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
            >
              DOWNLOAD CONFIRMATION
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Thank You for Downloading Job Scheduler Lite!
            </h1>
            <p className="text-xl text-white/90">
              Your download is ready. We'll be in touch shortly to help you get
              started.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-6 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <Image
                    src="https://www.usersolutions.com/wp-content/uploads/2022/10/thankyou.jpg"
                    alt="Customer service representative smiling with headset at computer"
                    width={600}
                    height={400}
                    className="mx-auto mb-8 rounded-lg shadow-lg"
                  />
                </div>

                <div className="mb-8 text-center">
                  <Link
                    href="/jsl-job-scheduler-lite-download"
                    className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Download Job Scheduler Lite
                  </Link>
                </div>

                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    We will contact you to discuss your job scheduling
                    application in complete detail. You are welcome to send
                    sample data at anytime to take advantage of our unique
                    demoing approach – proving the solution.
                  </p>

                  <p>
                    Job Scheduler Lite is perfect for small to medium-sized
                    manufacturing operations that need efficient job scheduling
                    without the complexity of larger systems.
                  </p>

                  <p>
                    Send data or post questions anytime to{' '}
                    <Link
                      href="mailto:us@usersolutions.com"
                      className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      us@usersolutions.com
                    </Link>{' '}
                    or at{' '}
                    <Link
                      href="tel:248.486.6365"
                      className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      248.486.6365
                    </Link>
                  </p>

                  <p className="font-semibold">
                    Kindest Regards,
                    <br />
                    User Solutions, Inc.
                    <br />
                    Since 1991 – Manufacturing Software made easy!
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
                  >
                    Back to Home
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Related Products */}
            <div className="mb-8">
              <h3 className="mb-6 text-2xl font-bold">
                You might also be interested in:
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Resource Manager DB
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Advanced database-driven resource management
                    </p>
                    <Link
                      href="/resource-manager-db-2"
                      className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Workcenter Scheduler XL
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Excel-based workcenter scheduling solution
                    </p>
                    <Link
                      href="/workcenter-schedulerxl"
                      className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Operations Manager
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Comprehensive operations management tools
                    </p>
                    <Link
                      href="/operations-manager"
                      className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="pb-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-8 text-center">
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                </h3>
                <Image
                  src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                  alt="Collection of industry and business awards logos"
                  width={1024}
                  height={128}
                  className="mx-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
