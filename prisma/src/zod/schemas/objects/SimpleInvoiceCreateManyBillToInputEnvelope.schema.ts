import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceCreateManyBillToInputObjectSchema as SimpleInvoiceCreateManyBillToInputObjectSchema } from './SimpleInvoiceCreateManyBillToInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SimpleInvoiceCreateManyBillToInputObjectSchema), z.lazy(() => SimpleInvoiceCreateManyBillToInputObjectSchema).array()])
}).strict();
export const SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateManyBillToInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateManyBillToInputEnvelope>;
export const SimpleInvoiceCreateManyBillToInputEnvelopeObjectZodSchema = makeSchema();
