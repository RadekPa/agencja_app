import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './dictPriceTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictPriceTypeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictPriceTypeWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictPriceTypeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictPriceTypeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeNullableScalarRelationFilter>;
export const DictPriceTypeNullableScalarRelationFilterObjectZodSchema = makeSchema();
