import Image from 'next/image';
import Link from 'next/link';

export default function PressReleasePage() {
    const pressReleases = [
        {
            title:
                'User Solutions Joins Fight Against Covid – Free Production Scheduling Software',
            date: 'April 7, 2020',
            excerpt:
                'User Solutions announces free Resource Manager for Excel to manufacturers fighting coronavirus pandemic.',
            slug: 'user-solutions-joins-fight-against-covid-free-production-scheduling-software'
        },
        {
            title: 'RMDB v6 Innovates Production Scheduling',
            date: 'May 10, 2024',
            excerpt:
                'Latest version of Resource Manager DB introduces innovative scheduling features.',
            slug: 'rmdb-v6-innovates-production-scheduling'
        },
        {
            title: 'Scheduling System Narrows Skills Gap',
            date: 'May 13, 2024',
            excerpt:
                'User Solutions scheduling systems help bridge manufacturing skills gap.',
            slug: 'scheduling-system-narrows-skills-gap'
        },
        {
            title: "Let's Make Manufacturing Great: National Manufacturing Day 2020",
            date: 'October 2, 2020',
            excerpt:
                'Celebrating National Manufacturing Day with innovative production scheduling solutions.',
            slug: 'lets-make-manufacturing-great-national-manufacturing-day-2020'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 py-6 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-bold">Press Releases</h1>
                    <p className="mt-4 text-center text-xl">
                        Stay updated with the latest news from User Solutions
                    </p>
                </div>
            </div>

            {/* Press Releases Content */}
            <div className="container mx-auto px-4 py-6">
                <div className="mx-auto max-w-7xl">
                    <div className="space-y-8">
                        {pressReleases.map((release, index) => (
                            <article
                                key={index}
                                className="rounded-lg bg-gray-50 p-8 shadow-lg"
                            >
                                <header className="mb-4">
                                    <h2 className="mb-2 text-2xl font-bold text-gray-800">
                                        <Link
                                            href={`/press_release/${release.slug}`}
                                            className="transition-colors hover:text-blue-600"
                                        >
                                            {release.title}
                                        </Link>
                                    </h2>
                                    <time className="text-gray-600">{release.date}</time>
                                </header>

                                <p className="mb-4 leading-relaxed text-gray-700">
                                    {release.excerpt}
                                </p>

                                <Link
                                    href={`/press_release/${release.slug}`}
                                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                                >
                                    Read Full Release →
                                </Link>
                            </article>
                        ))}
                    </div>

                    {/* Contact for Media */}
                    <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center">
                        <h3 className="mb-4 text-2xl font-bold text-gray-800">
                            Media Inquiries
                        </h3>
                        <p className="mb-6 text-gray-700">
                            For press inquiries, interviews, or additional information, please
                            contact our media team.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-800">
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:us@usersolutions.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    us@usersolutions.com
                                </a>
                            </p>
                            <p className="text-gray-800">
                                <strong>Phone:</strong>{' '}
                                <a
                                    href="tel:248.486.6365"
                                    className="text-blue-600 hover:underline"
                                >
                                    248.486.6365
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-8 text-3xl font-bold text-gray-800">
                        CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                    </h2>
                    <Image
                        src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                        alt="Collection of industry and business awards logos"
                        width={1024}
                        height={128}
                        className="mx-auto"
                    />
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 py-12 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-2xl font-bold">ABOUT US</h2>
                    <p className="mb-2">us@usersolutions.com</p>
                    <p className="mb-6">248.486.6365</p>

                    <h3 className="mb-4 text-xl font-bold">PRODUCTS</h3>
                    <div className="space-y-2">
                        <Link
                            href="/jsl-job-scheduler-lite"
                            className="block hover:underline"
                        >
                            Job Scheduler Lite (JSL)
                        </Link>
                        <Link
                            href="/resource-manager-db-2"
                            className="block hover:underline"
                        >
                            Resource Manager DB
                        </Link>
                        <Link
                            href="/edgebi"
                            className="block hover:underline"
                        >
                            EDGEBI
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
