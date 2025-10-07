import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Routes } from '@/constants/routes';

export default function OperationsManagerPage(): React.JSX.Element {
    const categories = [
        {
            title: 'Forecasting',
            description:
                'Production and Operations Management Templates for forecasting and demand planning',
            items: [
                {
                    title: 'Simple exponential smoothing',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-simple/'
                },
                {
                    title: 'Smoothing linear, exponential, and damped trends',
                    price: '$5',
                    infoLink:
                        'https://www.usersolutions.com/operations-manager-trendsmooth/'
                },
                {
                    title: 'Ratio-to-moving-average seasonal adjustment',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-multimon/'
                },
                {
                    title: 'Difference-to-moving-average seas. adj. for mo. data',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-additmon/'
                },
                {
                    title: 'Complete Forecasting package',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/FORECASTING-D.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Inventory Management',
            description: 'Comprehensive inventory management solutions and tools',
            items: [
                {
                    title: 'Economic order quantity',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-eoq/'
                },
                {
                    title: 'EOQ with backorders',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-managereoqback/'
                },
                {
                    title: 'EOQ with quantity discounts',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-eoqdisc/'
                },
                {
                    title: 'EOQ for production lot sizes',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-eoqprod/'
                },
                {
                    title: 'Reorder points and safety stocks',
                    price: '$15',
                    infoLink: 'https://www.usersolutions.com/operations-manager-rop/'
                },
                {
                    title: 'Complete Inventory Management Package',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/INVENTORY-MANAGEMENT-D.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Material Requirements Planning',
            description:
                'MRP solutions for production planning and inventory control',
            items: [
                {
                    title: 'MRP Inventory Plan',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-mrp1/'
                },
                {
                    title: 'Period-Order-Quantity',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-poq/'
                },
                {
                    title: 'Complete MRP Package',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/mrp-d.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Production Planning',
            description: 'Production planning and optimization tools',
            items: [
                {
                    title: 'Aggregate production planning',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-app/'
                },
                {
                    title: 'Run-Out Time production planning',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-runout/'
                },
                {
                    title: 'Learning curves',
                    price: '$10',
                    infoLink: 'https://www.usersolutions.com/operations-manager-learn/'
                },
                {
                    title: 'Complete Production Planning Package',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/PRODUCTION-PLANNING-D.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Facility Location',
            description:
                'Tools for optimal facility and distribution center location',
            items: [
                {
                    title: 'Center-of-Gravity method for locating dist. cntrs',
                    price: '$5',
                    infoLink: '#'
                },
                {
                    title: 'Complete Facility Location Package',
                    price: '$5',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/LOCATION-D.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Scheduling',
            description: 'Job sequencing and scheduling optimization',
            items: [
                {
                    title: 'Job sequencing for a single work station',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-sked1aa/'
                },
                {
                    title: 'Job sequencing for 2 work stations in a series',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-sked2a/'
                },
                {
                    title: 'Job sequencing for 3 work stations in a series',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-sked3a/'
                },
                {
                    title: 'Complete Scheduling Package',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/SCHEDULING-D.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Quality Control',
            description: 'Quality control and statistical process control tools',
            items: [
                {
                    title: 'Acceptance Sampling',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-acceptsa/'
                },
                {
                    title: 'Control chart for mean and range',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-mr-chart/'
                },
                {
                    title: 'Control chart for individual observations',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-i-chart/'
                },
                {
                    title: 'Control chart for perfect defective',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-p-chart/'
                },
                {
                    title: 'Control chart for number of defects',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-cu-chart/'
                },
                {
                    title: 'Control limit calculator',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-limit/'
                },
                {
                    title: 'Complete Quality Control Package',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/quality-d.doc',
                    isPackage: true
                }
            ]
        },
        {
            title: 'Analysis of Waiting Lines',
            description: 'Queue theory and waiting line analysis tools',
            items: [
                {
                    title: 'Single-Server Queues',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-singleeq/'
                },
                {
                    title: 'Multi-Server Queues',
                    price: '$5',
                    infoLink: 'https://www.usersolutions.com/operations-manager-multiq/'
                },
                {
                    title: 'Complete Analysis of Waiting Lines',
                    price: '$10',
                    infoLink:
                        'https://www.usersolutions.com/wp-content/uploads/2022/11/WAITINGLINES-D.doc',
                    isPackage: true
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Content */}
            <div className="container mx-auto px-4 pt-6">
                <div className="mx-auto max-w-6xl">
                    {/* Hero Section */}
                    <div className="mb-8 text-center">
                        <span className="inline-flex h-8 items-center rounded-full border px-3 py-0.5 text-sm font-medium text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            EXCEL TEMPLATES
                        </span>
                    </div>
                    <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                        Operations Manager
                    </h1>
                    <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                        Production and Operations Management Templates ideal for
                        introduction to Production Planning, Production Scheduling, Material
                        Requirements Planning, Inventory Management and Quality Control
                        techniques.
                    </p>
                    <p className="mb-8 text-lg text-muted-foreground">
                        All formulas are in Excel with full documentation. You can view full
                        documentation then order a single template, group per section, or
                        entire package.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-12">
                    {categories.map((category, index) => (
                        <Card
                            key={index}
                            className="mb-8"
                        >
                            <CardHeader>
                                <CardTitle className="text-3xl text-blue-600">
                                    {category.title}
                                </CardTitle>
                                <p className="text-lg text-muted-foreground">
                                    {category.description}
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {category.items.map((item, itemIndex) => (
                                        <Card
                                            key={itemIndex}
                                            className={`border-2 ${item.isPackage ? 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20' : 'border-gray-200'}`}
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex flex-col space-y-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                            {item.title}
                                                        </h3>
                                                        {item.isPackage && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="mt-2"
                                                            >
                                                                Complete Package
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-2xl font-bold text-blue-600">
                                                            {item.price}
                                                        </span>
                                                        <div className="flex space-x-2">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                asChild
                                                            >
                                                                <a
                                                                    href={item.infoLink}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {item.infoLink.includes('.doc')
                                                                        ? 'Doc'
                                                                        : 'Info'}
                                                                </a>
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                className="bg-blue-600 hover:bg-blue-700"
                                                            >
                                                                Buy Now
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Complete Package */}
                <Card className="mb-16 mt-8 border-4 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
                    <CardContent className="p-8">
                        <div className="text-center">
                            <Badge
                                variant="secondary"
                                className="mb-4 bg-green-200 text-green-800"
                            >
                                BEST VALUE
                            </Badge>
                            <h2 className="mb-4 text-4xl font-bold text-green-800 dark:text-green-300">
                                Complete Operations Manager Package
                            </h2>
                            <p className="mb-6 text-xl text-muted-foreground">
                                Get all Operations Manager templates in one comprehensive
                                package
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                                <span className="text-5xl font-bold text-green-600">$39</span>
                                <div className="flex space-x-4">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        asChild
                                    >
                                        <a
                                            href="https://www.usersolutions.com/wp-content/uploads/2022/11/USSOM.doc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Documentation
                                        </a>
                                    </Button>
                                    <Button
                                        size="lg"
                                        className="bg-green-600 hover:bg-green-700"
                                    >
                                        Buy Complete Package
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Call to Action */}
                <Card className="mb-16">
                    <CardContent className="p-8">
                        <div className="text-center">
                            <h2 className="mb-4 text-3xl font-bold">Need Help Choosing?</h2>
                            <p className="mb-6 text-lg text-muted-foreground">
                                Contact us for personalized recommendations based on your
                                specific needs
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                >
                                    <Link href={Routes.Contact}>Contact Us</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    asChild
                                >
                                    <a href="tel:248.486.6365">Call 248.486.6365</a>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Awards Section */}
                <section className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-12 text-center dark:from-blue-900/20 dark:to-purple-900/20">
                    <h2 className="mb-6 text-3xl font-semibold">
                        CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                    </h2>
                    <div className="flex justify-center">
                        <Image
                            src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                            alt="Collection of industry and business awards logos"
                            width={1024}
                            height={128}
                            className="rounded-lg"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
