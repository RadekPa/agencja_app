import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './objects/dictTitSubClassWhereInput.schema';

export const dictTitSubClassDeleteManySchema: z.ZodType<Prisma.dictTitSubClassDeleteManyArgs> = z.object({ where: dictTitSubClassWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassDeleteManyArgs>;

export const dictTitSubClassDeleteManyZodSchema = z.object({ where: dictTitSubClassWhereInputObjectSchema.optional() }).strict();