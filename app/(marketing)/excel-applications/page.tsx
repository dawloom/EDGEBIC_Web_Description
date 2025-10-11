import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ExcelApplicationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Excel Applications
            </h1>
            <p className="mb-8 text-xl text-gray-700">
              Choose the product that best suits your company's needs by using
              our product matrix
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/product-downloads">
                <Button
                  size="lg"
                  className="text-lg"
                >
                  Free Trial & Samples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Matrix */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Spreadsheet Scheduler */}
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">
                    Spreadsheet Scheduler
                  </CardTitle>
                  <span className="text-3xl">📊</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Single User</h3>
                    <p className="mb-4 text-3xl font-bold text-blue-600">$39</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Five Users</h3>
                    <p className="mb-4 text-3xl font-bold text-blue-600">$78</p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href="/spreadsheet-scheduler"
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Info/Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spreadsheet QC */}
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Spreadsheet QC</CardTitle>
                  <span className="text-3xl">📈</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Single User</h3>
                    <p className="mb-4 text-3xl font-bold text-purple-600">
                      $39
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Five Users</h3>
                    <p className="mb-4 text-3xl font-bold text-purple-600">
                      $78
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href="/spreadsheet-qc"
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Info/Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workcell Planner */}
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Workcell Planner</CardTitle>
                  <span className="text-3xl">🏭</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Single User</h3>
                    <p className="mb-4 text-3xl font-bold text-green-600">
                      $39
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Five Users</h3>
                    <p className="mb-4 text-3xl font-bold text-green-600">
                      $78
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href="/workcell-planner"
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Info/Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operations Manager */}
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Operations Manager</CardTitle>
                  <span className="text-3xl">⚙️</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Single User</h3>
                    <p className="mb-4 text-3xl font-bold text-orange-600">
                      $5-$39
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Five Users</h3>
                    <p className="mb-4 text-3xl font-bold text-orange-600">
                      $10-$78
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href="/operations-manager"
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Info/Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workcenter for XL */}
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Workcenter for XL</CardTitle>
                  <span className="text-3xl">📅</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Single User</h3>
                    <p className="mb-4 text-3xl font-bold text-indigo-600">
                      $5-$39
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Five Users</h3>
                    <p className="mb-4 text-3xl font-bold text-indigo-600">
                      $10-$78
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href="/workcenter-schedulerxl"
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Info/Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource Manager for Excel */}
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">
                    Resource Manager for Excel
                  </CardTitle>
                  <span className="text-3xl">📊</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Single User</h3>
                    <p className="mb-4 text-3xl font-bold text-teal-600">
                      $5-$39
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Five Users</h3>
                    <p className="mb-4 text-3xl font-bold text-teal-600">
                      $10-$78
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href="/resource-manager-for-excel-2"
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Info/Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 pb-8 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-lg font-semibold text-gray-800">
                    "Best choice for MRP and project management software"
                  </p>
                  <p className="mb-4 text-gray-600">– Sleepmaster Ltd</p>
                  <Link href="/sleepmaster-ltd">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-lg font-semibold text-gray-800">
                    "Manufacturing scheduling software with fantastic support"
                  </p>
                  <p className="mb-4 text-gray-600">– Cook Compression</p>
                  <Link href="/cook-compression">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-lg font-semibold text-gray-800">
                    "Easy ERP add-on for manufacturing resource planning"
                  </p>
                  <p className="mb-4 text-gray-600">– Incon Incorporated</p>
                  <Link href="/incon-incorporate">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-8 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <Card>
              <CardContent className="pt-8">
                <h2 className="mb-4 text-3xl font-bold">
                  Want to get your production in the groove?
                </h2>
                <p className="mb-8 text-xl text-gray-700">
                  Watch this classic video and get your operations movin' and
                  groovin' today!
                </p>
                <Link href="/videos">
                  <Button
                    size="lg"
                    className="text-lg"
                  >
                    Watch Videos
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-8 text-3xl font-bold">
              Celebrating 25 Years of Award Winning Software!
            </h2>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-4 text-gray-600">
                Recognized by industry leaders for excellence in manufacturing
                software
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
                <div className="text-sm font-semibold text-gray-500">
                  Industry Awards
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  Excellence Recognition
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  Customer Choice
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
