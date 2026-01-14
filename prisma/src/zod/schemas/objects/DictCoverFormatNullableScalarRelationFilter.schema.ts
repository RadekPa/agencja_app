import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './dictCoverFormatWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictCoverFormatWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictCoverFormatWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictCoverFormatNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictCoverFormatNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatNullableScalarRelationFilter>;
export const DictCoverFormatNullableScalarRelationFilterObjectZodSchema = makeSchema();
