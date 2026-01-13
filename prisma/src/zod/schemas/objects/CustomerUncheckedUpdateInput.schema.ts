import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema as InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutClientNestedInput.schema';
import { SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema as SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInput.schema';
import { SimpleInvoiceUncheckedUpdateManyWithoutBillToNestedInputObjectSchema as SimpleInvoiceUncheckedUpdateManyWithoutBillToNestedInputObjectSchema } from './SimpleInvoiceUncheckedUpdateManyWithoutBillToNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  invoices: z.lazy(() => InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  simpleInvoicesAsClient: z.lazy(() => SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  simpleInvoicesAsBillTo: z.lazy(() => SimpleInvoiceUncheckedUpdateManyWithoutBillToNestedInputObjectSchema).optional()
}).strict();
export const CustomerUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedUpdateInput>;
export const CustomerUncheckedUpdateInputObjectZodSchema = makeSchema();
