import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ERP Solutions for Production Planning | User Solutions',
    description:
        'Comprehensive ERP solutions designed for effective production planning and manufacturing management.',
    openGraph: {
        title: 'ERP Solutions for Production Planning',
        description:
            'Advanced ERP systems for manufacturing and production planning',
        url: 'https://www.usersolutions.com/erp-solutions-for-production-planning'
    }
};

export default function ERPSolutionsProductionPlanningPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                <h1>ERP Solutions for Production Planning</h1>

                <div className="mb-8 text-sm text-muted-foreground">
                    Published: August 13, 2025
                </div>

                {/* Content will be added here */}
                <div className="min-h-[400px]">
                    <p>Content coming soon...</p>
                </div>
            </article>
        </div>
    );
}
