import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransferID: z.literal(true).optional(),
  DebitID: z.literal(true).optional(),
  AmtWired: z.literal(true).optional(),
  Notes: z.literal(true).optional()
}).strict();
export const ArTransferDetailMinAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailMinAggregateInputType>;
export const ArTransferDetailMinAggregateInputObjectZodSchema = makeSchema();
