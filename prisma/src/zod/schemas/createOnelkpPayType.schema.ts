import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeSelectObjectSchema as lkpPayTypeSelectObjectSchema } from './objects/lkpPayTypeSelect.schema';
import { lkpPayTypeCreateInputObjectSchema as lkpPayTypeCreateInputObjectSchema } from './objects/lkpPayTypeCreateInput.schema';
import { lkpPayTypeUncheckedCreateInputObjectSchema as lkpPayTypeUncheckedCreateInputObjectSchema } from './objects/lkpPayTypeUncheckedCreateInput.schema';

export const lkpPayTypeCreateOneSchema: z.ZodType<Prisma.lkpPayTypeCreateArgs> = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  data: z.union([lkpPayTypeCreateInputObjectSchema, lkpPayTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeCreateArgs>;

export const lkpPayTypeCreateOneZodSchema = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  data: z.union([lkpPayTypeCreateInputObjectSchema, lkpPayTypeUncheckedCreateInputObjectSchema]) }).strict();