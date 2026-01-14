import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailCreateManyArTransactionInputObjectSchema as ArTransferDetailCreateManyArTransactionInputObjectSchema } from './ArTransferDetailCreateManyArTransactionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ArTransferDetailCreateManyArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailCreateManyArTransactionInputObjectSchema).array()])
}).strict();
export const ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema: z.ZodType<Prisma.ArTransferDetailCreateManyArTransactionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCreateManyArTransactionInputEnvelope>;
export const ArTransferDetailCreateManyArTransactionInputEnvelopeObjectZodSchema = makeSchema();
