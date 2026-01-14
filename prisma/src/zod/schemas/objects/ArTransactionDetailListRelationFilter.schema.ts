import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailWhereInputObjectSchema as ArTransactionDetailWhereInputObjectSchema } from './ArTransactionDetailWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ArTransactionDetailWhereInputObjectSchema).optional(),
  some: z.lazy(() => ArTransactionDetailWhereInputObjectSchema).optional(),
  none: z.lazy(() => ArTransactionDetailWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionDetailListRelationFilterObjectSchema: z.ZodType<Prisma.ArTransactionDetailListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailListRelationFilter>;
export const ArTransactionDetailListRelationFilterObjectZodSchema = makeSchema();
