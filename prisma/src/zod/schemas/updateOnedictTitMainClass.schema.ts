import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './objects/dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassUpdateInputObjectSchema as dictTitMainClassUpdateInputObjectSchema } from './objects/dictTitMainClassUpdateInput.schema';
import { dictTitMainClassUncheckedUpdateInputObjectSchema as dictTitMainClassUncheckedUpdateInputObjectSchema } from './objects/dictTitMainClassUncheckedUpdateInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './objects/dictTitMainClassWhereUniqueInput.schema';

export const dictTitMainClassUpdateOneSchema: z.ZodType<Prisma.dictTitMainClassUpdateArgs> = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), data: z.union([dictTitMainClassUpdateInputObjectSchema, dictTitMainClassUncheckedUpdateInputObjectSchema]), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateArgs>;

export const dictTitMainClassUpdateOneZodSchema = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), data: z.union([dictTitMainClassUpdateInputObjectSchema, dictTitMainClassUncheckedUpdateInputObjectSchema]), where: dictTitMainClassWhereUniqueInputObjectSchema }).strict();