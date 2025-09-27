import type { Metadata } from 'next';

import { ResourceManagementBlog } from '@/components/marketing/sections/resource-management-blog';
import { Page } from '@/components/ui/page';

export const metadata: Metadata = {
    title: 'Resource Management Blog',
    description:
        'Insights, tips, and best practices for resource management in manufacturing and production planning.'
};

export default function ResourceManagementBlogPage() {
    return (
        <Page>
            <ResourceManagementBlog />
        </Page>
    );
}