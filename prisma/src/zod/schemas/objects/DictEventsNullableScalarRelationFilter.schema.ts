import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictEventsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictEventsWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictEventsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictEventsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsNullableScalarRelationFilter>;
export const DictEventsNullableScalarRelationFilterObjectZodSchema = makeSchema();
