import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInput.schema'

const makeSchema = () => z.object({
  CountryID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CountryDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CountryPL: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Tax: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EU: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUncheckedUpdateWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUncheckedUpdateWithoutDictStatesInput>;
export const dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectZodSchema = makeSchema();
