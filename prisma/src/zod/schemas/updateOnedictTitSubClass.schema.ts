import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassSelectObjectSchema as dictTitSubClassSelectObjectSchema } from './objects/dictTitSubClassSelect.schema';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './objects/dictTitSubClassInclude.schema';
import { dictTitSubClassUpdateInputObjectSchema as dictTitSubClassUpdateInputObjectSchema } from './objects/dictTitSubClassUpdateInput.schema';
import { dictTitSubClassUncheckedUpdateInputObjectSchema as dictTitSubClassUncheckedUpdateInputObjectSchema } from './objects/dictTitSubClassUncheckedUpdateInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './objects/dictTitSubClassWhereUniqueInput.schema';

export const dictTitSubClassUpdateOneSchema: z.ZodType<Prisma.dictTitSubClassUpdateArgs> = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), data: z.union([dictTitSubClassUpdateInputObjectSchema, dictTitSubClassUncheckedUpdateInputObjectSchema]), where: dictTitSubClassWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateArgs>;

export const dictTitSubClassUpdateOneZodSchema = z.object({ select: dictTitSubClassSelectObjectSchema.optional(), include: dictTitSubClassIncludeObjectSchema.optional(), data: z.union([dictTitSubClassUpdateInputObjectSchema, dictTitSubClassUncheckedUpdateInputObjectSchema]), where: dictTitSubClassWhereUniqueInputObjectSchema }).strict();