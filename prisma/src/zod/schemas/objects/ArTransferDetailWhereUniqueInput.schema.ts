import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailDebitIDTransferIDCompoundUniqueInputObjectSchema as ArTransferDetailDebitIDTransferIDCompoundUniqueInputObjectSchema } from './ArTransferDetailDebitIDTransferIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  DebitID_TransferID: z.lazy(() => ArTransferDetailDebitIDTransferIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ArTransferDetailWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArTransferDetailWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailWhereUniqueInput>;
export const ArTransferDetailWhereUniqueInputObjectZodSchema = makeSchema();
