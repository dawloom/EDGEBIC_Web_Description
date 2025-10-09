import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYouWorkcellPlannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Thank You Image */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://www.usersolutions.com/wp-content/uploads/2022/10/thankyou.jpg"
              alt="Customer service representative smiling with headset at computer"
              className="w-full h-auto rounded-lg shadow-xl mb-8"
            />
          </div>
        </div>
      </section>

      {/* Main Thank You Content */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Thank you for your interest
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button asChild size="lg" className="mb-6">
                  <a 
                    href="https://www.usersolutions.com/US_WCP-2023D.xls"
                    download
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Click here to download your product
                  </a>
                </Button>
              </div>

              <div className="space-y-4 text-lg">
                <p>
                  We will contact you to discuss your scheduling application in complete detail.
                </p>
                
                <p>
                  You are welcome to send sample data at anytime to take advantage of our unique 
                  demoing approach – proving the solution.
                </p>
                
                <p>
                  Send data or post questions anytime to{" "}
                  <a href="mailto:US@usersolutions.com" className="text-blue-600 hover:underline font-medium">
                    US@usersolutions.com
                  </a>{" "}
                  or at{" "}
                  <a href="tel:248.486.1934" className="text-blue-600 hover:underline font-medium">
                    248.486.1934
                  </a>
                </p>
                
                <p className="font-medium">
                  Kindest Regards,
                </p>
                
                <p>
                  User Solutions, Inc.<br />
                  <span className="text-gray-600">Since 1991 – Manufacturing Software made easy!</span>
                </p>
              </div>

              <div className="text-center pt-4">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="pt-6 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
            </h2>
            <img
              src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
              alt="Collection of industry and business awards logos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
