import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 py-6 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-bold">Our Blog</h1>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-4 py-6">
                <div className="text-center">
                    <div className="rounded-lg bg-gray-50 p-12 shadow-lg">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                            No posts found!
                        </h2>
                        <p className="mb-6 text-gray-600">
                            We're working on bringing you valuable content about manufacturing
                            software, production scheduling, and industry insights. Check back
                            soon for updates!
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                        >
                            Contact Us for Updates
                        </Link>
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
