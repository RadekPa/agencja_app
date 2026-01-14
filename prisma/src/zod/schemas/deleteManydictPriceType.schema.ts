import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './objects/dictPriceTypeWhereInput.schema';

export const dictPriceTypeDeleteManySchema: z.ZodType<Prisma.dictPriceTypeDeleteManyArgs> = z.object({ where: dictPriceTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeDeleteManyArgs>;

export const dictPriceTypeDeleteManyZodSchema = z.object({ where: dictPriceTypeWhereInputObjectSchema.optional() }).strict();