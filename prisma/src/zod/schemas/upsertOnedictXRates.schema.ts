import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesSelectObjectSchema as dictXRatesSelectObjectSchema } from './objects/dictXRatesSelect.schema';
import { dictXRatesWhereUniqueInputObjectSchema as dictXRatesWhereUniqueInputObjectSchema } from './objects/dictXRatesWhereUniqueInput.schema';
import { dictXRatesCreateInputObjectSchema as dictXRatesCreateInputObjectSchema } from './objects/dictXRatesCreateInput.schema';
import { dictXRatesUncheckedCreateInputObjectSchema as dictXRatesUncheckedCreateInputObjectSchema } from './objects/dictXRatesUncheckedCreateInput.schema';
import { dictXRatesUpdateInputObjectSchema as dictXRatesUpdateInputObjectSchema } from './objects/dictXRatesUpdateInput.schema';
import { dictXRatesUncheckedUpdateInputObjectSchema as dictXRatesUncheckedUpdateInputObjectSchema } from './objects/dictXRatesUncheckedUpdateInput.schema';

export const dictXRatesUpsertOneSchema: z.ZodType<Prisma.dictXRatesUpsertArgs> = z.object({ select: dictXRatesSelectObjectSchema.optional(),  where: dictXRatesWhereUniqueInputObjectSchema, create: z.union([ dictXRatesCreateInputObjectSchema, dictXRatesUncheckedCreateInputObjectSchema ]), update: z.union([ dictXRatesUpdateInputObjectSchema, dictXRatesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictXRatesUpsertArgs>;

export const dictXRatesUpsertOneZodSchema = z.object({ select: dictXRatesSelectObjectSchema.optional(),  where: dictXRatesWhereUniqueInputObjectSchema, create: z.union([ dictXRatesCreateInputObjectSchema, dictXRatesUncheckedCreateInputObjectSchema ]), update: z.union([ dictXRatesUpdateInputObjectSchema, dictXRatesUncheckedUpdateInputObjectSchema ]) }).strict();