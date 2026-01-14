import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Waluta: z.union([z.string().max(4), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Wyci_g: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Data_wyc: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Nasz_inv: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Type: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Kwota_wp_ywu: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PayType: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Graal_perc: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Kwota_wyp_aty: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Kwota_inv: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Tax_10_: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TaxPerc: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Tax: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Wyd_Debit: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Extra_Bank: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Transfer: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AGNR: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RIGHT: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AUTOR: z.union([z.string().max(35), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Title: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  WYDAB: z.union([z.string().max(5), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  WYD: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  OWNAB: z.union([z.string().max(5), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  OWNER: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Sum: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SumPLN: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GRAAL_INCOME: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Kurs: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GraalPLN: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const pdxBilansUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.pdxBilansUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansUpdateManyMutationInput>;
export const pdxBilansUpdateManyMutationInputObjectZodSchema = makeSchema();
