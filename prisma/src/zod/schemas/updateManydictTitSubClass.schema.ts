import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassUpdateManyMutationInputObjectSchema as dictTitSubClassUpdateManyMutationInputObjectSchema } from './objects/dictTitSubClassUpdateManyMutationInput.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './objects/dictTitSubClassWhereInput.schema';

export const dictTitSubClassUpdateManySchema: z.ZodType<Prisma.dictTitSubClassUpdateManyArgs> = z.object({ data: dictTitSubClassUpdateManyMutationInputObjectSchema, where: dictTitSubClassWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateManyArgs>;

export const dictTitSubClassUpdateManyZodSchema = z.object({ data: dictTitSubClassUpdateManyMutationInputObjectSchema, where: dictTitSubClassWhereInputObjectSchema.optional() }).strict();