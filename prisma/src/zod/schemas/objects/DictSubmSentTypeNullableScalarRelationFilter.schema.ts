import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './dictSubmSentTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictSubmSentTypeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictSubmSentTypeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeNullableScalarRelationFilter>;
export const DictSubmSentTypeNullableScalarRelationFilterObjectZodSchema = makeSchema();
