import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './objects/dictRoyPriceTypeWhereInput.schema';

export const dictRoyPriceTypeDeleteManySchema: z.ZodType<Prisma.dictRoyPriceTypeDeleteManyArgs> = z.object({ where: dictRoyPriceTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeDeleteManyArgs>;

export const dictRoyPriceTypeDeleteManyZodSchema = z.object({ where: dictRoyPriceTypeWhereInputObjectSchema.optional() }).strict();