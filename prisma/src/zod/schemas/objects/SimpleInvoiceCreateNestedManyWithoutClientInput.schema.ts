import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceCreateWithoutClientInputObjectSchema as SimpleInvoiceCreateWithoutClientInputObjectSchema } from './SimpleInvoiceCreateWithoutClientInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutClientInput.schema';
import { SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema as SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema } from './SimpleInvoiceCreateOrConnectWithoutClientInput.schema';
import { SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema as SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema } from './SimpleInvoiceCreateManyClientInputEnvelope.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SimpleInvoiceCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema), z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SimpleInvoiceCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateNestedManyWithoutClientInput>;
export const SimpleInvoiceCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
