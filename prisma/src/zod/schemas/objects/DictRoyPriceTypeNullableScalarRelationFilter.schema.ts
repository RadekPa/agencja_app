import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './dictRoyPriceTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictRoyPriceTypeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictRoyPriceTypeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyPriceTypeNullableScalarRelationFilter>;
export const DictRoyPriceTypeNullableScalarRelationFilterObjectZodSchema = makeSchema();
