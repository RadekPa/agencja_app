import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { SimpleInvoiceUpdateManyWithoutClientNestedInputObjectSchema as SimpleInvoiceUpdateManyWithoutClientNestedInputObjectSchema } from './SimpleInvoiceUpdateManyWithoutClientNestedInput.schema';
import { SimpleInvoiceUpdateManyWithoutBillToNestedInputObjectSchema as SimpleInvoiceUpdateManyWithoutBillToNestedInputObjectSchema } from './SimpleInvoiceUpdateManyWithoutBillToNestedInput.schema'

const makeSchema = () => z.object({
  custAbb: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  postalCode: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nip: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  regon: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  simpleInvoicesAsClient: z.lazy(() => SimpleInvoiceUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  simpleInvoicesAsBillTo: z.lazy(() => SimpleInvoiceUpdateManyWithoutBillToNestedInputObjectSchema).optional()
}).strict();
export const CustomerUpdateWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerUpdateWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateWithoutInvoicesInput>;
export const CustomerUpdateWithoutInvoicesInputObjectZodSchema = makeSchema();
