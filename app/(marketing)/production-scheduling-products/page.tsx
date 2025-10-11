import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ProductionSchedulingProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Production Planning and Scheduling Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Contact US to discuss which product is the best fit for your application and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="text-lg">
                  Schedule a Live Demo Today!
                </Button>
              </Link>
              <Link href="/product-downloads">
                <Button size="lg" variant="outline" className="text-lg">
                  Free Trial & Sample
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pt-6 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  From a simple Excel based job shop scheduling application to Advanced Planning
                  and Scheduling software (APS) that works either standalone or integrates with
                  your ERP, we look forward to resolving your manufacturing scheduling challenges.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Choose the product that best suits your company's needs by using our product matrix.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Note */}
      <section className="pt-6 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Product license cost estimates. Customized training, implementation and other
                  support services available upon request.
                </p>
                <Link href="/excel-applications">
                  <Button variant="outline">
                    Other Excel Template Solutions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Starter - Job Scheduler Lite */}
              <Card className="border-2 border-gray-300">
                <CardHeader className="bg-gradient-to-br from-gray-100 to-gray-200 text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-400 text-white px-6 py-2 rounded-full text-lg font-bold">
                      $1000
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Job Scheduler Lite (JSL)
                  </h3>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <p className="text-gray-700 text-center mb-4">
                      Simple and effective job shop scheduling for small to medium businesses
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Job Shop Scheduling</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-red-600 mr-2">✗</span>
                      <span className="text-gray-400">Advanced Features</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="/jsl-job-scheduler-lite" className="block">
                      <Button className="w-full">
                        Read More
                      </Button>
                    </Link>
                    <Link href="/jsl-job-scheduler-lite" className="block">
                      <Button variant="outline" className="w-full">
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced - Resource Manager DB */}
              <Card className="border-2 border-blue-500 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-blue-100 to-blue-200 text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold">
                      $5000+
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">Advanced</CardTitle>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Resource Manager DB
                  </h3>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <p className="text-gray-700 text-center mb-4">
                      Database-driven APS with advanced planning and ERP integration
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Advanced Planning & Scheduling</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">ERP Integration</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Database-Driven</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Multi-User Support</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="/resource-manager-db-2" className="block">
                      <Button className="w-full">
                        Read More
                      </Button>
                    </Link>
                    <Link href="/resource-manager-db-2" className="block">
                      <Button variant="outline" className="w-full">
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Platinum - EDGEBI */}
              <Card className="border-2 border-purple-500">
                <CardHeader className="bg-gradient-to-br from-yellow-100 to-yellow-200 text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-full text-lg font-bold">
                      $2500+
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">Platinum</CardTitle>
                  <h3 className="text-xl font-semibold text-purple-600">
                    EDGEBI (Bundled w/ RMDB)
                  </h3>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <p className="text-gray-700 text-center mb-4">
                      Business intelligence and analytics bundled with Resource Manager DB
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">All RMDB Features</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Business Intelligence</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Advanced Analytics</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Custom Dashboards</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="/edgebi" className="block">
                      <Button className="w-full">
                        Read More
                      </Button>
                    </Link>
                    <Link href="/edgebi" className="block">
                      <Button variant="outline" className="w-full">
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 pt-6 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    "Best choice for MRP and project management software"
                  </p>
                  <p className="text-gray-600 mb-4">– Sleepmaster Ltd</p>
                  <Link href="/sleepmaster-ltd">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    "Manufacturing scheduling software with fantastic support"
                  </p>
                  <p className="text-gray-600 mb-4">– Cook Compression</p>
                  <Link href="/cook-compression">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    "Easy ERP add-on for manufacturing resource planning"
                  </p>
                  <p className="text-gray-600 mb-4">– Incon Incorporated</p>
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
      <section className="pt-6 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card>
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold mb-4">
                  Want to get your production in the groove?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Watch this classic video and get your operations movin' and groovin' today!
                </p>
                <Link href="/videos">
                  <Button size="lg" className="text-lg">
                    Watch Video
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 pt-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Celebrating 25 Years of Award Winning Software!
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                Trusted by manufacturers worldwide for over 25 years
              </p>
              <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
                <div className="text-sm font-semibold text-gray-500">Industry Awards</div>
                <div className="text-sm font-semibold text-gray-500">Excellence Recognition</div>
                <div className="text-sm font-semibold text-gray-500">Customer Choice</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
