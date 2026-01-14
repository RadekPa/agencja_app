import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  FVNr: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  FVDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  FVDateIssued: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  FVType: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CustID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  OrigCurrency: z.union([z.string().max(3), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  FVCurrency: z.union([z.string().max(3), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GraalPerc: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  VATCode: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  VatPerc: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NetAmt: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NetAmtCurr: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  VatAmt: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  XRate: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  VatAmtCurr: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GrossAmt: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  InvNr: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  InvAmt: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Title: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBNNr: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PayType: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  InvType: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  FVDescription: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  BilNr: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  OrigFVNr: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CorrectFVNr: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CreditID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ApplyID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PayDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EnterDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EnterEmployee: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Status: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblFraVAT_NewUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewUpdateManyMutationInput>;
export const tblFraVAT_NewUpdateManyMutationInputObjectZodSchema = makeSchema();
