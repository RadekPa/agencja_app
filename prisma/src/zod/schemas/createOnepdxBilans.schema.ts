import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './objects/pdxBilansSelect.schema';
import { pdxBilansCreateInputObjectSchema as pdxBilansCreateInputObjectSchema } from './objects/pdxBilansCreateInput.schema';
import { pdxBilansUncheckedCreateInputObjectSchema as pdxBilansUncheckedCreateInputObjectSchema } from './objects/pdxBilansUncheckedCreateInput.schema';

export const pdxBilansCreateOneSchema: z.ZodType<Prisma.pdxBilansCreateArgs> = z.object({ select: pdxBilansSelectObjectSchema.optional(),  data: z.union([pdxBilansCreateInputObjectSchema, pdxBilansUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.pdxBilansCreateArgs>;

export const pdxBilansCreateOneZodSchema = z.object({ select: pdxBilansSelectObjectSchema.optional(),  data: z.union([pdxBilansCreateInputObjectSchema, pdxBilansUncheckedCreateInputObjectSchema]) }).strict();