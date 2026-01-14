import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CurrID: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CurrDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUncheckedUpdateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUncheckedUpdateWithoutTblAgreementsInput>;
export const dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
