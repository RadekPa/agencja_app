import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeUpdateManyMutationInputObjectSchema as dictPriceTypeUpdateManyMutationInputObjectSchema } from './objects/dictPriceTypeUpdateManyMutationInput.schema';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './objects/dictPriceTypeWhereInput.schema';

export const dictPriceTypeUpdateManySchema: z.ZodType<Prisma.dictPriceTypeUpdateManyArgs> = z.object({ data: dictPriceTypeUpdateManyMutationInputObjectSchema, where: dictPriceTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeUpdateManyArgs>;

export const dictPriceTypeUpdateManyZodSchema = z.object({ data: dictPriceTypeUpdateManyMutationInputObjectSchema, where: dictPriceTypeWhereInputObjectSchema.optional() }).strict();