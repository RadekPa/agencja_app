import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceCreateWithoutBillToInputObjectSchema as SimpleInvoiceCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateWithoutBillToInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutBillToInput.schema';
import { SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema as SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateOrConnectWithoutBillToInput.schema';
import { SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInputObjectSchema as SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInputObjectSchema } from './SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInput.schema';
import { SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema as SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema } from './SimpleInvoiceCreateManyBillToInputEnvelope.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInputObjectSchema as SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInputObjectSchema } from './SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInput.schema';
import { SimpleInvoiceUpdateManyWithWhereWithoutBillToInputObjectSchema as SimpleInvoiceUpdateManyWithWhereWithoutBillToInputObjectSchema } from './SimpleInvoiceUpdateManyWithWhereWithoutBillToInput.schema';
import { SimpleInvoiceScalarWhereInputObjectSchema as SimpleInvoiceScalarWhereInputObjectSchema } from './SimpleInvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceCreateWithoutBillToInputObjectSchema).array(), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutBillToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceCreateOrConnectWithoutBillToInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUpsertWithWhereUniqueWithoutBillToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SimpleInvoiceCreateManyBillToInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUpdateWithWhereUniqueWithoutBillToInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SimpleInvoiceUpdateManyWithWhereWithoutBillToInputObjectSchema), z.lazy(() => SimpleInvoiceUpdateManyWithWhereWithoutBillToInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema), z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SimpleInvoiceUpdateManyWithoutBillToNestedInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpdateManyWithoutBillToNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateManyWithoutBillToNestedInput>;
export const SimpleInvoiceUpdateManyWithoutBillToNestedInputObjectZodSchema = makeSchema();
