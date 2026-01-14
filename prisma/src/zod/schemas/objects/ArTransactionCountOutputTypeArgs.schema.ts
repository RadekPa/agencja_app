import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCountOutputTypeSelectObjectSchema as ArTransactionCountOutputTypeSelectObjectSchema } from './ArTransactionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArTransactionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ArTransactionCountOutputTypeArgsObjectSchema = makeSchema();
export const ArTransactionCountOutputTypeArgsObjectZodSchema = makeSchema();
