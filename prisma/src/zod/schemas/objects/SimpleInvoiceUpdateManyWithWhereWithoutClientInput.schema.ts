import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceScalarWhereInputObjectSchema as SimpleInvoiceScalarWhereInputObjectSchema } from './SimpleInvoiceScalarWhereInput.schema';
import { SimpleInvoiceUpdateManyMutationInputObjectSchema as SimpleInvoiceUpdateManyMutationInputObjectSchema } from './SimpleInvoiceUpdateManyMutationInput.schema';
import { SimpleInvoiceUncheckedUpdateManyWithoutClientInputObjectSchema as SimpleInvoiceUncheckedUpdateManyWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SimpleInvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const SimpleInvoiceUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateManyWithWhereWithoutClientInput>;
export const SimpleInvoiceUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
