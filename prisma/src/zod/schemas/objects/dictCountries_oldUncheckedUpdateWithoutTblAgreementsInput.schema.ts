import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { dictStatesUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema as dictStatesUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema } from './dictStatesUncheckedUpdateManyWithoutDictCountries_oldNestedInput.schema'

const makeSchema = () => z.object({
  CountryID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CountryDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CountryPL: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Tax: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EU: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictStates: z.lazy(() => dictStatesUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUncheckedUpdateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUncheckedUpdateWithoutTblAgreementsInput>;
export const dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
