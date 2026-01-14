import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailSelectObjectSchema as ArTransactionDetailSelectObjectSchema } from './ArTransactionDetailSelect.schema';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './ArTransactionDetailInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArTransactionDetailSelectObjectSchema).optional(),
  include: z.lazy(() => ArTransactionDetailIncludeObjectSchema).optional()
}).strict();
export const ArTransactionDetailArgsObjectSchema = makeSchema();
export const ArTransactionDetailArgsObjectZodSchema = makeSchema();
