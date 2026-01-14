import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ArTransactionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ArTransactionWhereInputObjectSchema).optional().nullable()
}).strict();
export const ArTransactionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ArTransactionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionNullableScalarRelationFilter>;
export const ArTransactionNullableScalarRelationFilterObjectZodSchema = makeSchema();
