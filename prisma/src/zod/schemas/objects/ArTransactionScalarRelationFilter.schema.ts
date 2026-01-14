import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ArTransactionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ArTransactionWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionScalarRelationFilterObjectSchema: z.ZodType<Prisma.ArTransactionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionScalarRelationFilter>;
export const ArTransactionScalarRelationFilterObjectZodSchema = makeSchema();
