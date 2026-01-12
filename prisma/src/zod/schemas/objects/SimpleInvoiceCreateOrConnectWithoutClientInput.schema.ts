import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceCreateWithoutClientInputObjectSchema as SimpleInvoiceCreateWithoutClientInputObjectSchema } from './SimpleInvoiceCreateWithoutClientInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SimpleInvoiceCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateOrConnectWithoutClientInput>;
export const SimpleInvoiceCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
