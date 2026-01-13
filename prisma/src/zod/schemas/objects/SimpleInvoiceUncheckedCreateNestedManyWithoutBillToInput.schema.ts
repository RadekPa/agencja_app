import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceCreateWithoutBillToInputObjectSchema as SimpleInvoiceCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateWithoutBillToInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutBillToInput.schema';
import { SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema as SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateOrConnectWithoutBillToInput.schema';
import { SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema as SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema } from './SimpleInvoiceCreateManyBillToInputEnvelope.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceCreateWithoutBillToInputObjectSchema).array(), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInput>;
export const SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInputObjectZodSchema = makeSchema();
