'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const successStories = [
    {
        id: 1,
        title:
            'Resource Manager-DB Innovates Li-ion Battery Production Scheduling for ENEVATE',
        description:
            'Resource Manager-DB product provided a unique combination of planning, scheduling, and tracking functionality within a single, yet flexible system.',
        quote:
            'Resource Manager-DB product provided a unique combination of planning, scheduling, and tracking functionality within a single, yet flexible system.',
        author: 'Scott Bennett, Enevate',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/01-300x300.png',
        href: '#'
    },
    {
        id: 2,
        title:
            'Amish Easily Adopt & Rapidly Amortize New Production Scheduling System',
        description:
            "Nestled quietly in the heart of Ohio's Amish countryside is a furniture destination, offering an eclectic showroom of hand-crafted selections in the modern, rustic, traditional, transitional styles.",
        quote:
            'The system was incredibly easy to adopt and we saw immediate returns on our investment.',
        author: 'Ohio Furniture Manufacturer',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/02-300x300.png',
        href: '#'
    },
    {
        id: 3,
        title: 'Capacity and Production Planning add on for ERP',
        description:
            'BAE Systems/Ordinance Systems Inc. set out to design and implement a process that would enable our manufacturing personnel to systematically identify process, equipment, labor constraints.',
        quote:
            'This solution enabled us to systematically identify and resolve bottlenecks in our production process.',
        author: 'BAE Systems/Ordinance Systems Inc.',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/03-300x300.png',
        href: '#'
    },
    {
        id: 4,
        title:
            'Affordable, Easy-to-Implement MRP for Smaller Manufacturer (<$50M USD)',
        description:
            'Our situation is that we are a relatively small organization (AUD$50M of sales) and we have an outdated MRP system. The current system needed a complete overhaul.',
        quote:
            'Perfect solution for smaller manufacturers looking for affordable, flexible MRP systems.',
        author: 'Sleepmasters',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/04-300x300.png',
        href: '#'
    },
    {
        id: 5,
        title: 'Complements traditional MRP and Shop Control systems',
        description:
            'Arnold Quesenberry, Senior Consultant for A.G. Raymond & Co. Inc. has been using Resource Manager in conjunction with consulting projects.',
        quote:
            'We have found these products complement traditional MRP and Shop Control systems perfectly.',
        author: 'A.G. Raymond & Company',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/AGRaymond33f-161208-5849d765f1422.jpg',
        href: '#'
    },
    {
        id: 6,
        title: 'Finite Capacity / Resource Scheduling for Consulting Projects',
        description:
            'GEMS Healthcare Solutions a wholly-owned subsidiary of GE Medical Systems headquartered in San Ramon, California, provides integrated data mining, Internet-based benchmarking and consulting solutions.',
        quote:
            'Integrated scheduling solutions have transformed our consulting project delivery capabilities.',
        author: 'GEMS Healthcare Solutions',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/07-300x300.png',
        href: '#'
    },
    {
        id: 7,
        title:
            'Quick and Easy Production Scheduling Replaces Complex, Custom Excel Program',
        description:
            'We were looking for a way to schedule three in-line departments and various machines. Scheduling was being completed by the respective department supervisors with no coordination.',
        quote:
            'The new scheduling system replaced our complex Excel program with an intuitive, coordinated solution.',
        author: 'Kyocera Corporation',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/06-300x300.png',
        href: '#'
    },

    {
        id: 8,
        title: 'Repair Shops Triple On-Time Shipping Percentage – from 30% to >90%',
        description:
            'GE Railcar Services Corporation, a unit of General Electric Corporation manages a fleet of over 180,000 railcars throughout North America and has successfully deployed Workcenter solutions.',
        quote: 'We tripled our on-time shipping percentage from 30% to over 90%.',
        author: 'GE Railcar Services Corporation',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/GE-Rail-Services-Logoghj-161208-5849e6633a5d5-58e6958736b16.jpg',
        href: '#'
    },
    {
        id: 9,
        title: 'Job Shop increases throughput while improving shipping on time',
        description:
            'Technical Glass Products in Snoqualmie, WA started out reviewing the Resource Manager for Excel product line but quickly settled on Resource Manager-DB for multi-user support.',
        quote:
            'We significantly increased throughput while improving our on-time shipping performance.',
        author: 'Technical Glass Products',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/logo-tgpa-blue0-161208-5849d3ed255df.jpg',
        href: '#'
    },
    {
        id: 10,
        title:
            "Finite Capacity Scheduling of World's Largest Aircraft Carrier Nimitz",
        description:
            'The USS Nimitz is one of the Navy\'s nuclear-powered aircraft carriers, classified as a "super carrier" and the lead ship of its class.',
        quote:
            "Successfully implemented finite capacity scheduling for one of the world's most complex manufacturing environments.",
        author: 'US Navy',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/GrayAmNavy-Taglogo00-1634-58c6b882c5bd7.jpg',
        href: '#'
    },
    {
        id: 11,
        title:
            'ERP Vendor and Manufacturer Both Turn to RM-DB for Flexible Scheduling',
        description:
            'Plastilite Corporation, located in Omaha Nebraska, provides insulated and protective packing solutions to companies worldwide.',
        quote:
            'RM-DB provides the flexible scheduling solution we needed for our complex manufacturing processes.',
        author: 'Plastilite Corporation',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/Plastilite-161208-5849e7913fd3c.jpg',
        href: '#'
    },
    {
        id: 12,
        title:
            'Scheduling Labor out Several Months Increases Customer Satisfaction',
        description:
            'Joe Van Wagner, Production Manager for Cummins Engine, selected a Resource Manager to assist in scheduling labor and machine resources.',
        quote:
            'We are now able to schedule labor resources several months in advance, greatly increasing customer satisfaction.',
        author: 'Joe Van Wagner, Cummins Engine',
        logo: 'https://www.usersolutions.com/wp-content/uploads/2022/07/cumminslogo-59492683dd7a2.png',
        href: '#'
    }
];

export function NTClipboardSuccessStories(): React.JSX.Element {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-20">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Customer Success Stories
                        </h1>
                        <p className="mx-auto mt-6 max-w-4xl text-xl text-blue-100">
                            Click on logos or Read More to view just a sample of our
                            customers' success stories. You too can realize great success by
                            working with US!
                        </p>
                        <p className="mx-auto mt-4 max-w-4xl text-lg text-blue-100">
                            Contact US today to discover how easy and affordable it is to
                            become even more competitive and profitable through efficient
                            production planning, scheduling, tracking, combined with improved
                            communications.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-full bg-yellow-400 px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg"
                            >
                                Contact US Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Discover How Easy and Affordable It Is
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            To become even more competitive and profitable through efficient
                            production planning, scheduling, tracking, combined with improved
                            communications.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {successStories.map((story) => (
                            <div
                                key={story.id}
                                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                            >
                                <div className="mb-4 flex items-center justify-center">
                                    <div className="flex h-24 w-48 items-center justify-center rounded bg-gray-100 p-3">
                                        <Image
                                            src={story.logo}
                                            alt={`${story.author} logo`}
                                            width={180}
                                            height={90}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                </div>{' '}
                                <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                                    <Link
                                        href={story.href}
                                        className="hover:underline"
                                    >
                                        {story.title}
                                    </Link>
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    {story.description}
                                </p>
                                <blockquote className="mb-4 border-l-4 border-blue-500 pl-4">
                                    <p className="text-sm italic text-gray-700">
                                        "{story.quote}"
                                    </p>
                                    <footer className="mt-2 text-xs text-gray-500">
                                        — {story.author}
                                    </footer>
                                </blockquote>
                                <Link
                                    href={story.href}
                                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read Full Story
                                    <svg
                                        className="ml-1 size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-slate-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className="flex h-24 w-full max-w-4xl items-center justify-center rounded bg-gray-100">
                                <span className="text-gray-500">
                                    Industry Awards Collection
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white">
                        Ready to Create Your Own Success Story?
                    </h2>
                    <p className="mt-4 text-xl text-blue-100">
                        Contact us today to discover how we can help you achieve similar
                        results.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg"
                        >
                            Get Started Today
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-blue-600"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
