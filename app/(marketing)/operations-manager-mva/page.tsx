import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerMVAPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 dark:from-blue-800 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge
                variant="outline"
                className="h-8 rounded-full px-3 text-sm font-medium text-white border-white/20 bg-white/10 shadow-sm"
              >
                OPERATIONS MANAGER
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Operations Manager: MVA
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Multivariate Analysis - Uncover complex relationships in your operational data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="pt-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Case Study: Global Retail Analytics Corporation
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">The Challenge</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Global Retail Analytics Corporation needed to understand the complex relationships between customer demographics, purchasing patterns, seasonal trends, and store performance across their 200+ locations. Traditional single-variable analysis couldn't capture the intricate interactions between multiple factors affecting sales performance and customer behavior.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-green-600">The Solution: MVA Implementation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The company implemented Operations Manager's MVA module to perform comprehensive multivariate analysis including Principal Component Analysis (PCA), Factor Analysis, Cluster Analysis, and Canonical Correlation Analysis. This enabled them to identify hidden patterns and relationships in their multi-dimensional dataset.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Breakthrough Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Identified 5 key customer segments with distinct behaviors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span>Discovered 3 primary factors driving 78% of sales variance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span>Found correlation between weather and product categories</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span>Optimized store layouts based on customer flow patterns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>Improved inventory allocation by 32% efficiency</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                    <span>Increased targeted marketing effectiveness by 45%</span>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Advanced MVA Techniques
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Principal Component Analysis</h3>
                <p className="text-gray-600">
                  Reduce dimensionality while preserving maximum variance in your dataset
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Factor Analysis</h3>
                <p className="text-gray-600">
                  Identify underlying latent factors that explain observed variable relationships
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cluster Analysis</h3>
                <p className="text-gray-600">
                  Group similar observations to discover natural patterns in your data
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">🔗</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Canonical Correlation</h3>
                <p className="text-gray-600">
                  Analyze relationships between two sets of multiple variables
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">MANOVA</h3>
                <p className="text-gray-600">
                  Multivariate Analysis of Variance for comparing group means across multiple variables
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Multidimensional Scaling</h3>
                <p className="text-gray-600">
                  Visualize complex relationships and similarities in lower-dimensional space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="pt-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Real-World Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Quality Control & Process Optimization
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Identify critical process parameters affecting product quality</li>
                  <li>• Reduce defect rates through multivariate control charts</li>
                  <li>• Optimize multiple process variables simultaneously</li>
                  <li>• Detect anomalies in complex manufacturing processes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Customer Analytics & Segmentation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Segment customers based on multiple behavioral dimensions</li>
                  <li>• Identify key drivers of customer satisfaction</li>
                  <li>• Predict customer lifetime value using multiple factors</li>
                  <li>• Personalize marketing strategies based on cluster analysis</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  Financial Risk Management
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assess portfolio risk using multivariate models</li>
                  <li>• Identify hidden correlations between financial instruments</li>
                  <li>• Optimize asset allocation across multiple criteria</li>
                  <li>• Detect fraudulent patterns in transaction data</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">
                  Supply Chain Optimization
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analyze supplier performance across multiple metrics</li>
                  <li>• Optimize inventory levels considering multiple demand factors</li>
                  <li>• Identify bottlenecks in complex supply networks</li>
                  <li>• Predict supply chain disruptions using multiple indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Why Choose MVA for Your Analytics?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Comprehensive Insights
                </h3>
                <p className="text-gray-700">
                  Uncover complex relationships that single-variable analysis cannot detect, providing a complete picture of your data
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  Reduced Complexity
                </h3>
                <p className="text-gray-700">
                  Simplify high-dimensional data into manageable components while preserving essential information
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  Enhanced Decision Making
                </h3>
                <p className="text-gray-700">
                  Make informed decisions based on comprehensive analysis of multiple interacting factors
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  Pattern Recognition
                </h3>
                <p className="text-gray-700">
                  Automatically identify hidden patterns and groupings that would be impossible to detect manually
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="pt-6 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
            </h2>
            <div className="flex justify-center">
              <Image
                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                alt="Collection of industry and business awards logos"
                width={1024}
                height={128}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}