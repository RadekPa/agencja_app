import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './dictRoyAccountIntervalWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictRoyAccountIntervalNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalNullableScalarRelationFilter>;
export const DictRoyAccountIntervalNullableScalarRelationFilterObjectZodSchema = makeSchema();
