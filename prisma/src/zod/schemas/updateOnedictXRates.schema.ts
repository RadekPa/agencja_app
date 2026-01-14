import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesSelectObjectSchema as dictXRatesSelectObjectSchema } from './objects/dictXRatesSelect.schema';
import { dictXRatesUpdateInputObjectSchema as dictXRatesUpdateInputObjectSchema } from './objects/dictXRatesUpdateInput.schema';
import { dictXRatesUncheckedUpdateInputObjectSchema as dictXRatesUncheckedUpdateInputObjectSchema } from './objects/dictXRatesUncheckedUpdateInput.schema';
import { dictXRatesWhereUniqueInputObjectSchema as dictXRatesWhereUniqueInputObjectSchema } from './objects/dictXRatesWhereUniqueInput.schema';

export const dictXRatesUpdateOneSchema: z.ZodType<Prisma.dictXRatesUpdateArgs> = z.object({ select: dictXRatesSelectObjectSchema.optional(),  data: z.union([dictXRatesUpdateInputObjectSchema, dictXRatesUncheckedUpdateInputObjectSchema]), where: dictXRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictXRatesUpdateArgs>;

export const dictXRatesUpdateOneZodSchema = z.object({ select: dictXRatesSelectObjectSchema.optional(),  data: z.union([dictXRatesUpdateInputObjectSchema, dictXRatesUncheckedUpdateInputObjectSchema]), where: dictXRatesWhereUniqueInputObjectSchema }).strict();