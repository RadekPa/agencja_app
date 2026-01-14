import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransferID: z.number().int(),
  DebitID: z.number().int(),
  AmtWired: z.number().optional().nullable(),
  Notes: z.string().optional().nullable()
}).strict();
export const ArTransferDetailUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUncheckedCreateInput>;
export const ArTransferDetailUncheckedCreateInputObjectZodSchema = makeSchema();
