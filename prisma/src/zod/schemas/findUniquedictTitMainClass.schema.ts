import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './objects/dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './objects/dictTitMainClassWhereUniqueInput.schema';

export const dictTitMainClassFindUniqueSchema: z.ZodType<Prisma.dictTitMainClassFindUniqueArgs> = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassFindUniqueArgs>;

export const dictTitMainClassFindUniqueZodSchema = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict();