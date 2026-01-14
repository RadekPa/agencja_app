import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransferID: z.number().int(),
  DebitID: z.number().int(),
  AmtWired: z.number().optional().nullable(),
  Notes: z.string().optional().nullable()
}).strict();
export const ArTransferDetailCreateManyInputObjectSchema: z.ZodType<Prisma.ArTransferDetailCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCreateManyInput>;
export const ArTransferDetailCreateManyInputObjectZodSchema = makeSchema();
