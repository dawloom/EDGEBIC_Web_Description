import type { Metadata } from 'next';

export const metadata: Metadata = {
    title:
        'Scheduling System Narrows Skills Gap for Fire Rated Glass | User Solutions',
    description:
        'Learn how an advanced scheduling system helps narrow the skills gap in fire rated glass manufacturing.',
    openGraph: {
        title: 'Scheduling System Narrows Skills Gap - Fire Rated Glass',
        description: 'Advanced scheduling solutions for specialized manufacturing',
        url: 'https://www.usersolutions.com/scheduling-system-narrows-skills-gap-for-fire-rated-glass'
    }
};

export default function SchedulingSystemSkillsGapPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                <h1>Scheduling System Narrows Skills Gap for Fire Rated Glass</h1>

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
