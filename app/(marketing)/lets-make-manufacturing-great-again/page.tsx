import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Let's Make Manufacturing Great Again | User Solutions",
    description:
        'Discover how modern manufacturing solutions are transforming the industry and making manufacturing great again.',
    openGraph: {
        title: "Let's Make Manufacturing Great Again",
        description: 'Modern manufacturing solutions transforming the industry',
        url: 'https://www.usersolutions.com/lets-make-manufacturing-great-again'
    }
};

export default function LetsMakeManufacturingGreatAgainPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                <h1>Let&apos;s Make Manufacturing Great Again</h1>

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
