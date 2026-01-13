import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceUpdateWithoutBillToInputObjectSchema as SimpleInvoiceUpdateWithoutBillToInputObjectSchema } from './SimpleInvoiceUpdateWithoutBillToInput.schema';
import { SimpleInvoiceUncheckedUpdateWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedUpdateWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedUpdateWithoutBillToInput.schema';
import { SimpleInvoiceCreateWithoutBillToInputObjectSchema as SimpleInvoiceCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateWithoutBillToInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutBillToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SimpleInvoiceUpdateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedUpdateWithoutBillToInputObjectSchema)]),
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema)])
}).strict();
export const SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInput>;
export const SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInputObjectZodSchema = makeSchema();
