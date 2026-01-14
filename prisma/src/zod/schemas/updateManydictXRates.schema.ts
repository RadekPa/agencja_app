import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesUpdateManyMutationInputObjectSchema as dictXRatesUpdateManyMutationInputObjectSchema } from './objects/dictXRatesUpdateManyMutationInput.schema';
import { dictXRatesWhereInputObjectSchema as dictXRatesWhereInputObjectSchema } from './objects/dictXRatesWhereInput.schema';

export const dictXRatesUpdateManySchema: z.ZodType<Prisma.dictXRatesUpdateManyArgs> = z.object({ data: dictXRatesUpdateManyMutationInputObjectSchema, where: dictXRatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictXRatesUpdateManyArgs>;

export const dictXRatesUpdateManyZodSchema = z.object({ data: dictXRatesUpdateManyMutationInputObjectSchema, where: dictXRatesWhereInputObjectSchema.optional() }).strict();