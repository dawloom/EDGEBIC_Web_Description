import { type ContactRecord, type ContactStage } from '@prisma/client';

import type { TagDto } from '@/types/dtos/tag-dto';

export type ContactDto = {
  id: string;
  record: ContactRecord;
  image?: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  stage: ContactStage;
  isRead: boolean;
  description?: string;
  productInterest?: string;
  hearAboutUs?: string;
  createdAt: Date;
  tags: TagDto[];
};
