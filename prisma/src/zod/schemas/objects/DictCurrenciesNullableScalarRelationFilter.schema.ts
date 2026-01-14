import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './dictCurrenciesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictCurrenciesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictCurrenciesWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictCurrenciesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictCurrenciesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrenciesNullableScalarRelationFilter>;
export const DictCurrenciesNullableScalarRelationFilterObjectZodSchema = makeSchema();
