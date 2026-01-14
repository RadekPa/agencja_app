import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Step: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AgrRightID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CpsMax: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Rate: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInput>;
export const tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
