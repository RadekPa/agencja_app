import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceScalarWhereInputObjectSchema as SimpleInvoiceScalarWhereInputObjectSchema } from './SimpleInvoiceScalarWhereInput.schema';
import { SimpleInvoiceUpdateManyMutationInputObjectSchema as SimpleInvoiceUpdateManyMutationInputObjectSchema } from './SimpleInvoiceUpdateManyMutationInput.schema';
import { SimpleInvoiceUncheckedUpdateManyWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedUpdateManyWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedUpdateManyWithoutBillToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SimpleInvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => SimpleInvoiceUncheckedUpdateManyWithoutBillToInputObjectSchema)])
}).strict();
export const SimpleInvoiceUpdateManyWithWhereWithoutBillToInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceUpdateManyWithWhereWithoutBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateManyWithWhereWithoutBillToInput>;
export const SimpleInvoiceUpdateManyWithWhereWithoutBillToInputObjectZodSchema = makeSchema();
