import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BuyNowWPPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Workcell Planner - Buy Now
                        </h1>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="pb-12 pt-6">
                <div className="container mx-auto px-4">
                    <Card className="mx-auto max-w-4xl">
                        <CardHeader>
                            <CardTitle className="text-center text-3xl font-bold">
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                The objective of the model is to provide the master scheduler or
                                planning function with a tool for determining the overall level
                                of capacity and distribution of capacity required to meet
                                demand. This demand can be driven by a forecasted incoming rate
                                or consuming a backlog within a specified time frame for a
                                particular cell – as well as for overall plant level.
                            </p>

                            {/* Contact Form Section */}
                            <div className="mt-8 rounded-lg bg-gray-50 p-6">
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
                                        Send
                                    </button>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
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
