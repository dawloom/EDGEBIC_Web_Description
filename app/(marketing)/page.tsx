import * as React from 'react';

import { NTClipboardHero } from '@/components/marketing/sections/ntclipboard-hero';
import { NTClipboardSummary } from '@/components/marketing/sections/ntclipboard-summary';
import { NTClipboardTestimonials } from '@/components/marketing/sections/ntclipboard-testimonials';
import { NTClipboardToolBox } from '@/components/marketing/sections/ntclipboard-toolbox';

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      <NTClipboardHero />
      {/* <NTClipboardSummary /> */}
      <NTClipboardToolBox />
      <NTClipboardTestimonials />
      {/* <NTClipboardPricing /> */}
      {/* <NTClipboardDemo /> */}
      {/* <NTClipboardFAQ /> */}
      {/* <NTClipboardCTA /> */}
    </>
  );
}
