import type { Metadata } from 'next';

export const metadata: Metadata = {
    title:
        'Small Manufacturer and Job Shop Uses Planning, Scheduling and Tracking Tools to Become More Efficient | User Solutions',
    description:
        'Success story: How a small manufacturer and job shop used planning, scheduling, and tracking tools from User Solutions Inc. to become more efficient and competitive.',
    openGraph: {
        title: 'Small Manufacturer Success Story - User Solutions',
        description:
            'Planning, scheduling and tracking tools drive efficiency and competitiveness',
        url: 'https://www.usersolutions.com/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive'
    }
};

export default function SmallManufacturerSuccessStoryPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                <h1>
                    Small Manufacturer Uses Planning, Scheduling and Tracking Tools to
                    Become More Efficient
                </h1>

                <div className="mb-8 text-sm text-muted-foreground">
                    Published: May 22, 2024
                </div>

                {/* Content will be added here */}
                <div className="min-h-[400px]">
                    <p>Content coming soon...</p>
                </div>
            </article>
        </div>
    );
}
