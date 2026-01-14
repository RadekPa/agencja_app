import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './dictAgrEventsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictAgrEventsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictAgrEventsWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictAgrEventsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictAgrEventsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrEventsNullableScalarRelationFilter>;
export const DictAgrEventsNullableScalarRelationFilterObjectZodSchema = makeSchema();
