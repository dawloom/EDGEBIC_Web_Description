import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function InconIncorporatedPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Logo */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8">
              <img
                src="https://www.usersolutions.com/wp-content/uploads/2022/10/logo003-58c6bad38b32e.jpg"
                alt="INCON blue text logo on white background"
                className="mx-auto h-auto max-w-xs rounded-lg bg-white p-4"
              />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Hi-tech Connector Mfr Accurately Schedules Labor with MRP Add-On
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6">
        <div className="container mx-auto max-w-5xl px-4">
          <Card>
            <CardContent className="pt-8">
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                For awhile, we had been seeking better scheduling information
                out of our system. Exact Software recommended Resource
                Manager-DB from User Solutions. We found that not only was the
                product quick to integrate with our Macola system, it also
                integrated easily with our current custom labor tracking system
                and provides the needed visibility for us to plan labor more
                accurately " according Ted.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Finally, we can see in advance how to staff the plant for most
                efficient scheduling and respond accurately to our customers
                with realistic promise dates.
              </p>
              <p className="mt-6 text-right font-semibold text-slate-900 dark:text-white">
                Ted Schultz
              </p>
            </CardContent>
          </Card>

          {/* Awards Section */}
          <Card className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardContent className="p-8 text-center">
              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
              </h3>
              <img
                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                alt="Collection of industry and business awards logos"
                className="mx-auto h-auto max-w-full"
              />
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
