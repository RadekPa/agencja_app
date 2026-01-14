import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyFindManySchema as ArApplyFindManySchema } from '../findManyArApply.schema';
import { ArTransactionDetailFindManySchema as ArTransactionDetailFindManySchema } from '../findManyArTransactionDetail.schema';
import { ArTransferDetailFindManySchema as ArTransferDetailFindManySchema } from '../findManyArTransferDetail.schema';
import { ArTransactionCountOutputTypeArgsObjectSchema as ArTransactionCountOutputTypeArgsObjectSchema } from './ArTransactionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  ArApply: z.union([z.boolean(), z.lazy(() => ArApplyFindManySchema)]).optional(),
  ArTransactionDetail: z.union([z.boolean(), z.lazy(() => ArTransactionDetailFindManySchema)]).optional(),
  ArTransferDetail: z.union([z.boolean(), z.lazy(() => ArTransferDetailFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ArTransactionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ArTransactionIncludeObjectSchema: z.ZodType<Prisma.ArTransactionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionInclude>;
export const ArTransactionIncludeObjectZodSchema = makeSchema();
