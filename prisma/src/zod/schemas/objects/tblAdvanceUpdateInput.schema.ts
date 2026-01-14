import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInputObjectSchema as tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInputObjectSchema } from './tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInput.schema'

const makeSchema = () => z.object({
  Inst: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AdvTermId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AdvTypeId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Amount: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AdvTermDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInputObjectSchema).optional()
}).strict();
export const tblAdvanceUpdateInputObjectSchema: z.ZodType<Prisma.tblAdvanceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUpdateInput>;
export const tblAdvanceUpdateInputObjectZodSchema = makeSchema();
