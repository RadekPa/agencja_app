import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailWhereInputObjectSchema as ArTransactionDetailWhereInputObjectSchema } from './ArTransactionDetailWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionDetailWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionCountOutputTypeCountArTransactionDetailArgsObjectSchema = makeSchema();
export const ArTransactionCountOutputTypeCountArTransactionDetailArgsObjectZodSchema = makeSchema();
