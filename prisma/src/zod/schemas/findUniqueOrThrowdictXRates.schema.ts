import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesSelectObjectSchema as dictXRatesSelectObjectSchema } from './objects/dictXRatesSelect.schema';
import { dictXRatesWhereUniqueInputObjectSchema as dictXRatesWhereUniqueInputObjectSchema } from './objects/dictXRatesWhereUniqueInput.schema';

export const dictXRatesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictXRatesFindUniqueOrThrowArgs> = z.object({ select: dictXRatesSelectObjectSchema.optional(),  where: dictXRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictXRatesFindUniqueOrThrowArgs>;

export const dictXRatesFindUniqueOrThrowZodSchema = z.object({ select: dictXRatesSelectObjectSchema.optional(),  where: dictXRatesWhereUniqueInputObjectSchema }).strict();