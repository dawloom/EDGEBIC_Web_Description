import type { Metadata } from 'next';

export const metadata: Metadata = {
    title:
        'User Solutions Inc Named as One of Top ERP Solutions Transforming Business 2016 by CIO Applications | 25 Years in Business',
    description:
        'User Solutions Inc. recognized as one of the top ERP solutions transforming business in 2016 by CIO Applications as they celebrate 25 years in business.',
    openGraph: {
        title: 'Top ERP Solutions 2016 - User Solutions 25 Years',
        description:
            'Recognized by CIO Applications as top ERP solution transforming business',
        url: 'https://www.usersolutions.com/user-solutions-inc-named-as-one-of-top-erp-solutions-transforming-business-2016-by-cio-applications-as-they-celebrate-25-years-in-business'
    }
};

export default function TopERPSolutions2016Page() {
    return (
        <div className="container mx-auto px-4 py-16">
            <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                <h1>
                    User Solutions Inc Named as One of Top ERP Solutions Transforming
                    Business 2016
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
