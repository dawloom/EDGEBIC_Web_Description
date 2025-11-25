import { Suspense } from 'react';

import { PurchaseSuccess } from '@/components/marketing/sections/purchase-success';

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PurchaseSuccess />
    </Suspense>
  );
}
