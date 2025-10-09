import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
            </h1>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img
              src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
              alt="Collection of industry and business awards logos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                ABOUT US
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-lg">
                  <strong>Contact Information:</strong>
                </p>
                <p className="text-xl">
                  <a href="mailto:us@usersolutions.com" className="text-blue-600 hover:underline">
                    us@usersolutions.com
                  </a>
                </p>
                <p className="text-xl">
                  <a href="tel:248.486.6365" className="text-blue-600 hover:underline">
                    248.486.6365
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-6 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                PRODUCTS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-lg">
                <li>
                  <a 
                    href="/jsl-job-scheduler-lite" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Job Scheduler Lite (JSL)
                  </a>
                </li>
                <li>
                  <a 
                    href="/resource-manager-db-2" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Resource Manager DB
                  </a>
                </li>
                <li>
                  <a 
                    href="/edgebi" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    EDGEBI
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Policy Footer */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg">
              <a 
                href="/our-privacy-policy" 
                className="text-blue-600 hover:underline font-medium"
              >
                View Our Privacy Policy
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              © User Solutions, Inc. South Lyon MI All Right Reserved © 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
