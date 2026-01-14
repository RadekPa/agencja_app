import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransferID: z.literal(true).optional(),
  DebitID: z.literal(true).optional(),
  AmtWired: z.literal(true).optional()
}).strict();
export const ArTransferDetailAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailAvgAggregateInputType>;
export const ArTransferDetailAvgAggregateInputObjectZodSchema = makeSchema();
