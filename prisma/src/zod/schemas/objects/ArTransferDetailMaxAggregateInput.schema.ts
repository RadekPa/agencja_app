import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransferID: z.literal(true).optional(),
  DebitID: z.literal(true).optional(),
  AmtWired: z.literal(true).optional(),
  Notes: z.literal(true).optional()
}).strict();
export const ArTransferDetailMaxAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailMaxAggregateInputType>;
export const ArTransferDetailMaxAggregateInputObjectZodSchema = makeSchema();
