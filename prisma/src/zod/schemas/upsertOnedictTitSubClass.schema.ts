import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassSelectObjectSchema as dictTitSubClassSelectObjectSchema } from './objects/dictTitSubClassSelect.schema';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './objects/dictTitSubClassInclude.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './objects/dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassCreateInputObjectSchema as dictTitSubClassCreateInputObjectSchema } from './objects/dictTitSubClassCreateInput.schema';
import { dictTitSubClassUncheckedCreateInputObjectSchema as dictTitSubClassUncheckedCreateInputObjectSchema } from './objects/dictTitSubClassUncheckedCreateInput.schema';
import { dictTitSubClassUpdateInputObjectSchema as dictTitSubClassUpdateInputObjectSchema } from './objects/dictTitSubClassUpdateInput.schema';
import { dictTitSubClassUncheckedUpdateInputObjectSchema as dictTitSubClassUncheckedUpdateInputObjectSchema } from './objects/dictTitSubClassUncheckedUpdateInput.schema';

export const dictTitSubClassUpsertOneSchema: z.ZodType<Prisma.dictTitSubClassUpsertArgs> = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), where: dictTitSubClassWhereUniqueInputObjectSchema, create: z.union([ dictTitSubClassCreateInputObjectSchema, dictTitSubClassUncheckedCreateInputObjectSchema ]), update: z.union([ dictTitSubClassUpdateInputObjectSchema, dictTitSubClassUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassUpsertArgs>;

export const dictTitSubClassUpsertOneZodSchema = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), where: dictTitSubClassWhereUniqueInputObjectSchema, create: z.union([ dictTitSubClassCreateInputObjectSchema, dictTitSubClassUncheckedCreateInputObjectSchema ]), update: z.union([ dictTitSubClassUpdateInputObjectSchema, dictTitSubClassUncheckedUpdateInputObjectSchema ]) }).strict();