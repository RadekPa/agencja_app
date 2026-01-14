import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictTitMainClassNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictTitMainClassNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictTitMainClassNullableScalarRelationFilter>;
export const DictTitMainClassNullableScalarRelationFilterObjectZodSchema = makeSchema();
