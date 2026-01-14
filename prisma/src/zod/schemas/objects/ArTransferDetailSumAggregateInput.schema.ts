import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransferID: z.literal(true).optional(),
  DebitID: z.literal(true).optional(),
  AmtWired: z.literal(true).optional()
}).strict();
export const ArTransferDetailSumAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailSumAggregateInputType>;
export const ArTransferDetailSumAggregateInputObjectZodSchema = makeSchema();
