import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './objects/dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './objects/dictTitMainClassWhereUniqueInput.schema';

export const dictTitMainClassFindUniqueOrThrowSchema: z.ZodType<Prisma.dictTitMainClassFindUniqueOrThrowArgs> = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassFindUniqueOrThrowArgs>;

export const dictTitMainClassFindUniqueOrThrowZodSchema = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict();