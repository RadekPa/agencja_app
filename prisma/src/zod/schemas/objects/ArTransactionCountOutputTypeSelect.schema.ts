import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCountOutputTypeCountArApplyArgsObjectSchema as ArTransactionCountOutputTypeCountArApplyArgsObjectSchema } from './ArTransactionCountOutputTypeCountArApplyArgs.schema';
import { ArTransactionCountOutputTypeCountArTransactionDetailArgsObjectSchema as ArTransactionCountOutputTypeCountArTransactionDetailArgsObjectSchema } from './ArTransactionCountOutputTypeCountArTransactionDetailArgs.schema';
import { ArTransactionCountOutputTypeCountArTransferDetailArgsObjectSchema as ArTransactionCountOutputTypeCountArTransferDetailArgsObjectSchema } from './ArTransactionCountOutputTypeCountArTransferDetailArgs.schema'

const makeSchema = () => z.object({
  ArApply: z.union([z.boolean(), z.lazy(() => ArTransactionCountOutputTypeCountArApplyArgsObjectSchema)]).optional(),
  ArTransactionDetail: z.union([z.boolean(), z.lazy(() => ArTransactionCountOutputTypeCountArTransactionDetailArgsObjectSchema)]).optional(),
  ArTransferDetail: z.union([z.boolean(), z.lazy(() => ArTransactionCountOutputTypeCountArTransferDetailArgsObjectSchema)]).optional()
}).strict();
export const ArTransactionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ArTransactionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCountOutputTypeSelect>;
export const ArTransactionCountOutputTypeSelectObjectZodSchema = makeSchema();
