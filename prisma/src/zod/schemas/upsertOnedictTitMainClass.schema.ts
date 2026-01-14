import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './objects/dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './objects/dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassCreateInputObjectSchema as dictTitMainClassCreateInputObjectSchema } from './objects/dictTitMainClassCreateInput.schema';
import { dictTitMainClassUncheckedCreateInputObjectSchema as dictTitMainClassUncheckedCreateInputObjectSchema } from './objects/dictTitMainClassUncheckedCreateInput.schema';
import { dictTitMainClassUpdateInputObjectSchema as dictTitMainClassUpdateInputObjectSchema } from './objects/dictTitMainClassUpdateInput.schema';
import { dictTitMainClassUncheckedUpdateInputObjectSchema as dictTitMainClassUncheckedUpdateInputObjectSchema } from './objects/dictTitMainClassUncheckedUpdateInput.schema';

export const dictTitMainClassUpsertOneSchema: z.ZodType<Prisma.dictTitMainClassUpsertArgs> = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema, create: z.union([ dictTitMainClassCreateInputObjectSchema, dictTitMainClassUncheckedCreateInputObjectSchema ]), update: z.union([ dictTitMainClassUpdateInputObjectSchema, dictTitMainClassUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassUpsertArgs>;

export const dictTitMainClassUpsertOneZodSchema = z.object({ select: dictTitMainClassSelectObjectSchema.optional(), include: dictTitMainClassIncludeObjectSchema.optional(), where: dictTitMainClassWhereUniqueInputObjectSchema, create: z.union([ dictTitMainClassCreateInputObjectSchema, dictTitMainClassUncheckedCreateInputObjectSchema ]), update: z.union([ dictTitMainClassUpdateInputObjectSchema, dictTitMainClassUncheckedUpdateInputObjectSchema ]) }).strict();