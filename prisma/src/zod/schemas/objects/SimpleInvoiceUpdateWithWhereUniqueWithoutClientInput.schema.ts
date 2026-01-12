import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceUpdateWithoutClientInputObjectSchema as SimpleInvoiceUpdateWithoutClientInputObjectSchema } from './SimpleInvoiceUpdateWithoutClientInput.schema';
import { SimpleInvoiceUncheckedUpdateWithoutClientInputObjectSchema as SimpleInvoiceUncheckedUpdateWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SimpleInvoiceUpdateWithoutClientInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const SimpleInvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateWithWhereUniqueWithoutClientInput>;
export const SimpleInvoiceUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
