import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassUpdateManyMutationInputObjectSchema as dictTitMainClassUpdateManyMutationInputObjectSchema } from './objects/dictTitMainClassUpdateManyMutationInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './objects/dictTitMainClassWhereInput.schema';

export const dictTitMainClassUpdateManySchema: z.ZodType<Prisma.dictTitMainClassUpdateManyArgs> = z.object({ data: dictTitMainClassUpdateManyMutationInputObjectSchema, where: dictTitMainClassWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateManyArgs>;

export const dictTitMainClassUpdateManyZodSchema = z.object({ data: dictTitMainClassUpdateManyMutationInputObjectSchema, where: dictTitMainClassWhereInputObjectSchema.optional() }).strict();