import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesNestedInput.schema'

const makeSchema = () => z.object({
  CurrID: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CurrDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesNestedInputObjectSchema).optional()
}).strict();
export const dictCurrenciesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUncheckedUpdateInput>;
export const dictCurrenciesUncheckedUpdateInputObjectZodSchema = makeSchema();
