import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceCreateManyClientInputObjectSchema as SimpleInvoiceCreateManyClientInputObjectSchema } from './SimpleInvoiceCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SimpleInvoiceCreateManyClientInputObjectSchema), z.lazy(() => SimpleInvoiceCreateManyClientInputObjectSchema).array()])
}).strict();
export const SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateManyClientInputEnvelope>;
export const SimpleInvoiceCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
