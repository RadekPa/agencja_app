import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceCreateWithoutBillToInputObjectSchema as SimpleInvoiceCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateWithoutBillToInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutBillToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema)])
}).strict();
export const SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateOrConnectWithoutBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateOrConnectWithoutBillToInput>;
export const SimpleInvoiceCreateOrConnectWithoutBillToInputObjectZodSchema = makeSchema();
