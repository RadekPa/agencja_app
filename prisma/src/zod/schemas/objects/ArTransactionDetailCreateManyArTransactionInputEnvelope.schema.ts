import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailCreateManyArTransactionInputObjectSchema as ArTransactionDetailCreateManyArTransactionInputObjectSchema } from './ArTransactionDetailCreateManyArTransactionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ArTransactionDetailCreateManyArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailCreateManyArTransactionInputObjectSchema).array()])
}).strict();
export const ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema: z.ZodType<Prisma.ArTransactionDetailCreateManyArTransactionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateManyArTransactionInputEnvelope>;
export const ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectZodSchema = makeSchema();
