import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailWhereInputObjectSchema as ArTransferDetailWhereInputObjectSchema } from './ArTransferDetailWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransferDetailWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionCountOutputTypeCountArTransferDetailArgsObjectSchema = makeSchema();
export const ArTransactionCountOutputTypeCountArTransferDetailArgsObjectZodSchema = makeSchema();
