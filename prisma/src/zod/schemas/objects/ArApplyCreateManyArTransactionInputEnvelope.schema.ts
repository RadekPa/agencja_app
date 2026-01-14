import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyCreateManyArTransactionInputObjectSchema as ArApplyCreateManyArTransactionInputObjectSchema } from './ArApplyCreateManyArTransactionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ArApplyCreateManyArTransactionInputObjectSchema), z.lazy(() => ArApplyCreateManyArTransactionInputObjectSchema).array()])
}).strict();
export const ArApplyCreateManyArTransactionInputEnvelopeObjectSchema: z.ZodType<Prisma.ArApplyCreateManyArTransactionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyCreateManyArTransactionInputEnvelope>;
export const ArApplyCreateManyArTransactionInputEnvelopeObjectZodSchema = makeSchema();
