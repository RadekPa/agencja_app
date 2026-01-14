import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesWhereInputObjectSchema as dictXRatesWhereInputObjectSchema } from './objects/dictXRatesWhereInput.schema';

export const dictXRatesDeleteManySchema: z.ZodType<Prisma.dictXRatesDeleteManyArgs> = z.object({ where: dictXRatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictXRatesDeleteManyArgs>;

export const dictXRatesDeleteManyZodSchema = z.object({ where: dictXRatesWhereInputObjectSchema.optional() }).strict();