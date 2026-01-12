import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceCreateWithoutClientInputObjectSchema as SimpleInvoiceCreateWithoutClientInputObjectSchema } from './SimpleInvoiceCreateWithoutClientInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutClientInput.schema';
import { SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema as SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema } from './SimpleInvoiceCreateOrConnectWithoutClientInput.schema';
import { SimpleInvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema as SimpleInvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './SimpleInvoiceUpsertWithWhereUniqueWithoutClientInput.schema';
import { SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema as SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema } from './SimpleInvoiceCreateManyClientInputEnvelope.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema as SimpleInvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './SimpleInvoiceUpdateWithWhereUniqueWithoutClientInput.schema';
import { SimpleInvoiceUpdateManyWithWhereWithoutClientInputObjectSchema as SimpleInvoiceUpdateManyWithWhereWithoutClientInputObjectSchema } from './SimpleInvoiceUpdateManyWithWhereWithoutClientInput.schema';
import { SimpleInvoiceScalarWhereInputObjectSchema as SimpleInvoiceScalarWhereInputObjectSchema } from './SimpleInvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SimpleInvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SimpleInvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SimpleInvoiceUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema), z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SimpleInvoiceUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateManyWithoutClientNestedInput>;
export const SimpleInvoiceUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
