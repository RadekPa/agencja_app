import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeUpdateManyMutationInputObjectSchema as dictRoyPriceTypeUpdateManyMutationInputObjectSchema } from './objects/dictRoyPriceTypeUpdateManyMutationInput.schema';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './objects/dictRoyPriceTypeWhereInput.schema';

export const dictRoyPriceTypeUpdateManySchema: z.ZodType<Prisma.dictRoyPriceTypeUpdateManyArgs> = z.object({ data: dictRoyPriceTypeUpdateManyMutationInputObjectSchema, where: dictRoyPriceTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpdateManyArgs>;

export const dictRoyPriceTypeUpdateManyZodSchema = z.object({ data: dictRoyPriceTypeUpdateManyMutationInputObjectSchema, where: dictRoyPriceTypeWhereInputObjectSchema.optional() }).strict();