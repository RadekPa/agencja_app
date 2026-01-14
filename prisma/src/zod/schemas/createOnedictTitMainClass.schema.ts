import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './objects/dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassCreateInputObjectSchema as dictTitMainClassCreateInputObjectSchema } from './objects/dictTitMainClassCreateInput.schema';
import { dictTitMainClassUncheckedCreateInputObjectSchema as dictTitMainClassUncheckedCreateInputObjectSchema } from './objects/dictTitMainClassUncheckedCreateInput.schema';

export const dictTitMainClassCreateOneSchema: z.ZodType<Prisma.dictTitMainClassCreateArgs> = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), data: z.union([dictTitMainClassCreateInputObjectSchema, dictTitMainClassUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassCreateArgs>;

export const dictTitMainClassCreateOneZodSchema = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), data: z.union([dictTitMainClassCreateInputObjectSchema, dictTitMainClassUncheckedCreateInputObjectSchema]) }).strict();