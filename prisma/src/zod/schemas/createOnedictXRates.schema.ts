import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesSelectObjectSchema as dictXRatesSelectObjectSchema } from './objects/dictXRatesSelect.schema';
import { dictXRatesCreateInputObjectSchema as dictXRatesCreateInputObjectSchema } from './objects/dictXRatesCreateInput.schema';
import { dictXRatesUncheckedCreateInputObjectSchema as dictXRatesUncheckedCreateInputObjectSchema } from './objects/dictXRatesUncheckedCreateInput.schema';

export const dictXRatesCreateOneSchema: z.ZodType<Prisma.dictXRatesCreateArgs> = z.object({ select: dictXRatesSelectObjectSchema.optional(),  data: z.union([dictXRatesCreateInputObjectSchema, dictXRatesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictXRatesCreateArgs>;

export const dictXRatesCreateOneZodSchema = z.object({ select: dictXRatesSelectObjectSchema.optional(),  data: z.union([dictXRatesCreateInputObjectSchema, dictXRatesUncheckedCreateInputObjectSchema]) }).strict();