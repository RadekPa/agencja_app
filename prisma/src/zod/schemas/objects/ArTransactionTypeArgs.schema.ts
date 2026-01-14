import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './ArTransactionTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArTransactionTypeSelectObjectSchema).optional()
}).strict();
export const ArTransactionTypeArgsObjectSchema = makeSchema();
export const ArTransactionTypeArgsObjectZodSchema = makeSchema();
