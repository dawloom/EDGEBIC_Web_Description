import Link from 'next/link';
import { XCircleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function CancelledPage() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center py-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <XCircleIcon className="mx-auto size-16 text-orange-500" />
          <CardTitle className="mt-4 text-2xl">Payment Cancelled</CardTitle>
          <CardDescription>
            Your payment was cancelled. No charges were made to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            If you encountered any issues or have questions, please don't
            hesitate to contact our support team.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              asChild
              className="w-full"
              variant="outline"
            >
              <Link href="/">Return to Home</Link>
            </Button>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              <Link href="/#purchase">Try Again</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
