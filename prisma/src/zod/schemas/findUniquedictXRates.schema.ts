import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesSelectObjectSchema as dictXRatesSelectObjectSchema } from './objects/dictXRatesSelect.schema';
import { dictXRatesWhereUniqueInputObjectSchema as dictXRatesWhereUniqueInputObjectSchema } from './objects/dictXRatesWhereUniqueInput.schema';

export const dictXRatesFindUniqueSchema: z.ZodType<Prisma.dictXRatesFindUniqueArgs> = z.object({ select: dictXRatesSelectObjectSchema.optional(),  where: dictXRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictXRatesFindUniqueArgs>;

export const dictXRatesFindUniqueZodSchema = z.object({ select: dictXRatesSelectObjectSchema.optional(),  where: dictXRatesWhereUniqueInputObjectSchema }).strict();