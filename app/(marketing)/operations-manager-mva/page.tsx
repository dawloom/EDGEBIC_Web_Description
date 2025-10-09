import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerMVAPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white dark:from-blue-800 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <Badge
                variant="outline"
                className="h-8 rounded-full border-white/20 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
              >
                OPERATIONS MANAGER
              </Badge>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Operations Manager: MVA
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              Multivariate Analysis - Uncover complex relationships in your
              operational data
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-gray-50 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Case Study: Global Retail Analytics Corporation
            </h2>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                The Challenge
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                Global Retail Analytics Corporation needed to understand the
                complex relationships between customer demographics, purchasing
                patterns, seasonal trends, and store performance across their
                200+ locations. Traditional single-variable analysis couldn't
                capture the intricate interactions between multiple factors
                affecting sales performance and customer behavior.
              </p>

              <h3 className="mb-4 text-2xl font-semibold text-green-600">
                The Solution: MVA Implementation
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                The company implemented Operations Manager's MVA module to
                perform comprehensive multivariate analysis including Principal
                Component Analysis (PCA), Factor Analysis, Cluster Analysis, and
                Canonical Correlation Analysis. This enabled them to identify
                hidden patterns and relationships in their multi-dimensional
                dataset.
              </p>

              <h3 className="mb-4 text-2xl font-semibold text-purple-600">
                Breakthrough Insights
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 size-3 rounded-full bg-green-500" />
                    <span>
                      Identified 5 key customer segments with distinct behaviors
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 size-3 rounded-full bg-blue-500" />
                    <span>
                      Discovered 3 primary factors driving 78% of sales variance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 size-3 rounded-full bg-purple-500" />
                    <span>
                      Found correlation between weather and product categories
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 size-3 rounded-full bg-orange-500" />
                    <span>
                      Optimized store layouts based on customer flow patterns
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 size-3 rounded-full bg-red-500" />
                    <span>Improved inventory allocation by 32% efficiency</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 size-3 rounded-full bg-teal-500" />
                    <span>
                      Increased targeted marketing effectiveness by 45%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVA Techniques */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Advanced MVA Techniques
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">📊</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Principal Component Analysis
                </h3>
                <p className="text-gray-600">
                  Reduce dimensionality while preserving maximum variance in
                  your dataset
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl font-bold text-green-600">🔍</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Factor Analysis</h3>
                <p className="text-gray-600">
                  Identify underlying latent factors that explain observed
                  variable relationships
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl font-bold text-purple-600">🎯</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Cluster Analysis</h3>
                <p className="text-gray-600">
                  Group similar observations to discover natural patterns in
                  your data
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-2xl font-bold text-orange-600">🔗</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Canonical Correlation
                </h3>
                <p className="text-gray-600">
                  Analyze relationships between two sets of multiple variables
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-red-100">
                  <span className="text-2xl font-bold text-red-600">📈</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">MANOVA</h3>
                <p className="text-gray-600">
                  Multivariate Analysis of Variance for comparing group means
                  across multiple variables
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-2xl font-bold text-teal-600">🌐</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Multidimensional Scaling
                </h3>
                <p className="text-gray-600">
                  Visualize complex relationships and similarities in
                  lower-dimensional space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-gray-50 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Real-World Applications
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-blue-600">
                  Quality Control & Process Optimization
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Identify critical process parameters affecting product
                    quality
                  </li>
                  <li>
                    • Reduce defect rates through multivariate control charts
                  </li>
                  <li>• Optimize multiple process variables simultaneously</li>
                  <li>• Detect anomalies in complex manufacturing processes</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-green-600">
                  Customer Analytics & Segmentation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Segment customers based on multiple behavioral dimensions
                  </li>
                  <li>• Identify key drivers of customer satisfaction</li>
                  <li>
                    • Predict customer lifetime value using multiple factors
                  </li>
                  <li>
                    • Personalize marketing strategies based on cluster analysis
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-purple-600">
                  Financial Risk Management
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assess portfolio risk using multivariate models</li>
                  <li>
                    • Identify hidden correlations between financial instruments
                  </li>
                  <li>• Optimize asset allocation across multiple criteria</li>
                  <li>• Detect fraudulent patterns in transaction data</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  Supply Chain Optimization
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Analyze supplier performance across multiple metrics
                  </li>
                  <li>
                    • Optimize inventory levels considering multiple demand
                    factors
                  </li>
                  <li>• Identify bottlenecks in complex supply networks</li>
                  <li>
                    • Predict supply chain disruptions using multiple indicators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold">
              Why Choose MVA for Your Analytics?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-blue-600">
                  Comprehensive Insights
                </h3>
                <p className="text-gray-700">
                  Uncover complex relationships that single-variable analysis
                  cannot detect, providing a complete picture of your data
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-green-600">
                  Reduced Complexity
                </h3>
                <p className="text-gray-700">
                  Simplify high-dimensional data into manageable components
                  while preserving essential information
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-purple-600">
                  Enhanced Decision Making
                </h3>
                <p className="text-gray-700">
                  Make informed decisions based on comprehensive analysis of
                  multiple interacting factors
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-orange-600">
                  Pattern Recognition
                </h3>
                <p className="text-gray-700">
                  Automatically identify hidden patterns and groupings that
                  would be impossible to detect manually
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-muted/50 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
            </h2>
            <div className="flex justify-center">
              <Image
                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                alt="Collection of industry and business awards logos"
                width={1024}
                height={128}
                className="h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
