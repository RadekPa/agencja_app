import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictCopyTypeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictCopyTypeWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictCopyTypeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictCopyTypeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeNullableScalarRelationFilter>;
export const DictCopyTypeNullableScalarRelationFilterObjectZodSchema = makeSchema();
