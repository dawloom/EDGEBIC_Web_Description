import * as React from 'react';

import { SocialMediaCard } from '@/components/dashboard/settings/organization/information/social-media-card';
import { AnnotatedSection } from '@/components/ui/annotated';
import { getSocialMedia } from '@/data/organization/get-social-media';

export default async function SocialMediaPage(): Promise<React.JSX.Element> {
  const socialMedia = await getSocialMedia();
  return (
    <AnnotatedSection
      title="YouTube Video"
      description="Set the YouTube video that will be displayed on your homepage and admin dashboard. This video will be visible to all visitors."
    >
      <SocialMediaCard socialMedia={socialMedia} />
    </AnnotatedSection>
  );
}
