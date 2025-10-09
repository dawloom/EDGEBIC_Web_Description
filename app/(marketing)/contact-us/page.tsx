import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Contact US
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-12 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/* Left Column - Description and Form */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">
                                        Let's Discuss YOUR Processes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-lg leading-relaxed">
                                        Instead of a one size fits all approach, lets discuss YOUR
                                        processes and challenges and explore situations to fit YOUR
                                        WAY. We can even use your data during a live demo meeting.
                                        Contact US by filling out the form below and we will be in
                                        touch to prepare custom demo.
                                    </p>

                                    <ul className="space-y-3 text-lg">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-blue-600">•</span>
                                            Schedule a quick call to discuss your application.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-blue-600">•</span>
                                            Schedule a live, custom demo (We will be in contact to
                                            understand your application and obtain your actual
                                            data/reports).
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-blue-600">•</span>
                                            We'll be periodically sending you updates about our new
                                            products and features
                                        </li>
                                    </ul>

                                    {/* Contact Form */}
                                    <div className="rounded-lg bg-gray-50 p-6">
                                        <form className="space-y-4">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="mb-1 block text-sm font-medium text-gray-700"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="mb-1 block text-sm font-medium text-gray-700"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="mb-1 block text-sm font-medium text-gray-700"
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="company"
                                                    className="mb-1 block text-sm font-medium text-gray-700"
                                                >
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="mb-1 block text-sm font-medium text-gray-700"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Right Column - Image and Tagline */}
                            <div className="flex flex-col items-center justify-center space-y-6">
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/side.png"
                                    alt="Colorful abstract silhouette, Sleep Master logo, people and cityscape"
                                    className="h-auto w-full rounded-lg shadow-lg"
                                />
                                <p className="text-center text-xl font-medium text-gray-700">
                                    The perfect complement for companies of any size… from Job
                                    Shops to Small-Medium Manufacturers to Global Multi-Nationals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Banner */}
            <section className="bg-gray-50 pb-12 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl text-center">
                        <h2 className="mb-6 text-3xl font-bold">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h2>
                        <img
                            src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                            alt="Collection of industry and business awards logos"
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
