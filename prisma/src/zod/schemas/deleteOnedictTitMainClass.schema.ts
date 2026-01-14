import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './objects/dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './objects/dictTitMainClassWhereUniqueInput.schema';

export const dictTitMainClassDeleteOneSchema: z.ZodType<Prisma.dictTitMainClassDeleteArgs> = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassDeleteArgs>;

export const dictTitMainClassDeleteOneZodSchema = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict();