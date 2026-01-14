import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionArgsObjectSchema as ArTransactionArgsObjectSchema } from './ArTransactionArgs.schema'

const makeSchema = () => z.object({
  ArTransaction: z.union([z.boolean(), z.lazy(() => ArTransactionArgsObjectSchema)]).optional()
}).strict();
export const ArTransferDetailIncludeObjectSchema: z.ZodType<Prisma.ArTransferDetailInclude> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailInclude>;
export const ArTransferDetailIncludeObjectZodSchema = makeSchema();
