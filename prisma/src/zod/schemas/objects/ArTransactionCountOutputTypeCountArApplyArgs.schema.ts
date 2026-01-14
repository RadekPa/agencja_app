import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './ArApplyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArApplyWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionCountOutputTypeCountArApplyArgsObjectSchema = makeSchema();
export const ArTransactionCountOutputTypeCountArApplyArgsObjectZodSchema = makeSchema();
