import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DebitID: z.number().int(),
  TransferID: z.number().int()
}).strict();
export const ArTransferDetailDebitIDTransferIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ArTransferDetailDebitIDTransferIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailDebitIDTransferIDCompoundUniqueInput>;
export const ArTransferDetailDebitIDTransferIDCompoundUniqueInputObjectZodSchema = makeSchema();
