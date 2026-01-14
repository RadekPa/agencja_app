import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema as tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema } from './tblCustomersUpdateManyWithoutDictStatesNestedInput.schema'

const makeSchema = () => z.object({
  StateID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateAbb: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateName: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema).optional()
}).strict();
export const dictStatesUpdateWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateWithoutDictCountries_oldInput>;
export const dictStatesUpdateWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
