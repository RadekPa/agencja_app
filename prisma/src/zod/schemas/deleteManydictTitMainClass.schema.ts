import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './objects/dictTitMainClassWhereInput.schema';

export const dictTitMainClassDeleteManySchema: z.ZodType<Prisma.dictTitMainClassDeleteManyArgs> = z.object({ where: dictTitMainClassWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassDeleteManyArgs>;

export const dictTitMainClassDeleteManyZodSchema = z.object({ where: dictTitMainClassWhereInputObjectSchema.optional() }).strict();