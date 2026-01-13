import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceUpdateWithoutBillToInputObjectSchema as SimpleInvoiceUpdateWithoutBillToInputObjectSchema } from './SimpleInvoiceUpdateWithoutBillToInput.schema';
import { SimpleInvoiceUncheckedUpdateWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedUpdateWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedUpdateWithoutBillToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SimpleInvoiceUpdateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedUpdateWithoutBillToInputObjectSchema)])
}).strict();
export const SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInput>;
export const SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInputObjectZodSchema = makeSchema();
