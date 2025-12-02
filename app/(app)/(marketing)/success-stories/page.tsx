import type { Metadata } from 'next';

import { NTClipboardSuccessStories } from '@/components/marketing/sections/ntclipboard-success-stories';
import { Page } from '@/components/ui/page';

export const metadata: Metadata = {
  title: 'Customer Success Stories',
  description:
    'Discover how our customers have achieved great success with our resource management and production planning solutions. Real customer testimonials and case studies.'
};

export default function SuccessStoriesPage(): React.JSX.Element {
  return (
    <Page>
      <NTClipboardSuccessStories />
    </Page>
  );
}
