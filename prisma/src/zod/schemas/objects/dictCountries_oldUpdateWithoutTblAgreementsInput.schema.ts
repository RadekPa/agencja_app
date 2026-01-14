import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { dictStatesUpdateManyWithoutDictCountries_oldNestedInputObjectSchema as dictStatesUpdateManyWithoutDictCountries_oldNestedInputObjectSchema } from './dictStatesUpdateManyWithoutDictCountries_oldNestedInput.schema'

const makeSchema = () => z.object({
  CountryDesc: z.union([z.string().max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CountryPL: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Tax: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Code: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EU: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictStates: z.lazy(() => dictStatesUpdateManyWithoutDictCountries_oldNestedInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpdateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateWithoutTblAgreementsInput>;
export const dictCountries_oldUpdateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
