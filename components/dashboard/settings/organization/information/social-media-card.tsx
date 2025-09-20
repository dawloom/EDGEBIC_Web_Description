'use client';

import * as React from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

import { updateSocialMedia } from '@/actions/organization/update-social-media';
import { YouTubeIcon } from '@/components/ui/brand-icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  type CardProps
} from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { InputWithAdornments } from '@/components/ui/input-with-adornments';
import { Separator } from '@/components/ui/separator';
import { useZodForm } from '@/hooks/use-zod-form';
import {
  updateSocialMediaSchema,
  type UpdateSocialMediaSchema
} from '@/schemas/organization/update-social-media-schema';
import type { SocialMediaDto } from '@/types/dtos/social-media-dto';

export type SocialMediaCardProps = CardProps & {
  socialMedia: SocialMediaDto;
};

export function SocialMediaCard({
  socialMedia,
  ...other
}: SocialMediaCardProps): React.JSX.Element {
  const methods = useZodForm({
    schema: updateSocialMediaSchema,
    mode: 'all',
    defaultValues: {
      linkedInProfile: socialMedia.linkedInProfile,
      instagramProfile: socialMedia.instagramProfile,
      youTubeChannel: socialMedia.youTubeChannel,
      xProfile: socialMedia.xProfile,
      tikTokProfile: socialMedia.tikTokProfile,
      facebookPage: socialMedia.facebookPage
    }
  });
  const canSubmit = !methods.formState.isSubmitting;
  const onSubmit: SubmitHandler<UpdateSocialMediaSchema> = async (values) => {
    if (!canSubmit) {
      return;
    }
    const result = await updateSocialMedia(values);
    if (!result?.serverError && !result?.validationErrors) {
      toast.success('Social media updated');
    } else {
      toast.error("Couldn't update social media");
    }
  };
  return (
    <FormProvider {...methods}>
      <Card {...other}>
        <CardContent className="p-6">
          <form
            className="space-y-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormField
              control={methods.control}
              name="youTubeChannel"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>YouTube Video</FormLabel>
                  <FormControl>
                    <InputWithAdornments
                      type="url"
                      placeholder="https://youtube.com/watch?v=your-video-id"
                      maxLength={2048}
                      startAdornment={
                        <div className="flex h-9 items-center justify-center border-r pr-3">
                          <YouTubeIcon className="size-4 shrink-0" />
                        </div>
                      }
                      className="pl-12"
                      disabled={methods.formState.isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <p className="text-sm text-muted-foreground">
                    This video will be displayed on your homepage and admin dashboard
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </CardContent>
        <Separator />
        <CardFooter className="flex w-full justify-end pt-6">
          <Button
            type="button"
            variant="default"
            size="default"
            disabled={!canSubmit}
            loading={methods.formState.isSubmitting}
            onClick={methods.handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    </FormProvider>
  );
}
