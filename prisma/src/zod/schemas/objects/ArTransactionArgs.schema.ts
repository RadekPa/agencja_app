import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './ArTransactionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArTransactionSelectObjectSchema).optional(),
  include: z.lazy(() => ArTransactionIncludeObjectSchema).optional()
}).strict();
export const ArTransactionArgsObjectSchema = makeSchema();
export const ArTransactionArgsObjectZodSchema = makeSchema();
