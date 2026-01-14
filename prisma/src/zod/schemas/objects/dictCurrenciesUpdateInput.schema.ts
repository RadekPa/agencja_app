import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgreementsUpdateManyWithoutDictCurrenciesNestedInputObjectSchema as tblAgreementsUpdateManyWithoutDictCurrenciesNestedInputObjectSchema } from './tblAgreementsUpdateManyWithoutDictCurrenciesNestedInput.schema'

const makeSchema = () => z.object({
  CurrID: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CurrDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateManyWithoutDictCurrenciesNestedInputObjectSchema).optional()
}).strict();
export const dictCurrenciesUpdateInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUpdateInput>;
export const dictCurrenciesUpdateInputObjectZodSchema = makeSchema();
