import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceUpdateWithoutClientInputObjectSchema as SimpleInvoiceUpdateWithoutClientInputObjectSchema } from './SimpleInvoiceUpdateWithoutClientInput.schema';
import { SimpleInvoiceUncheckedUpdateWithoutClientInputObjectSchema as SimpleInvoiceUncheckedUpdateWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedUpdateWithoutClientInput.schema';
import { SimpleInvoiceCreateWithoutClientInputObjectSchema as SimpleInvoiceCreateWithoutClientInputObjectSchema } from './SimpleInvoiceCreateWithoutClientInput.schema';
import { SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema as SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SimpleInvoiceUpdateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => SimpleInvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SimpleInvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpsertWithWhereUniqueWithoutClientInput>;
export const SimpleInvoiceUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
