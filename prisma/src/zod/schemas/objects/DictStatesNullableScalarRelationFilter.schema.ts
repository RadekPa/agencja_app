import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './dictStatesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictStatesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictStatesWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictStatesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictStatesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictStatesNullableScalarRelationFilter>;
export const DictStatesNullableScalarRelationFilterObjectZodSchema = makeSchema();
