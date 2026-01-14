import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictStatesNestedInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictStatesNestedInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictStatesNestedInput.schema'

const makeSchema = () => z.object({
  StateID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateAbb: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictStatesNestedInputObjectSchema).optional()
}).strict();
export const dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesUncheckedUpdateWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUncheckedUpdateWithoutDictCountries_oldInput>;
export const dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
