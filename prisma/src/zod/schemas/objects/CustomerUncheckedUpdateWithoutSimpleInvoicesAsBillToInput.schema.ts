import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema as InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutClientNestedInput.schema';
import { SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema as SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  custAbb: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  postalCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nip: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  regon: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  invoices: z.lazy(() => InvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  simpleInvoicesAsClient: z.lazy(() => SimpleInvoiceUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInput>;
export const CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectZodSchema = makeSchema();
