import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictCountries_oldUpdateOneWithoutDictStatesNestedInputObjectSchema as dictCountries_oldUpdateOneWithoutDictStatesNestedInputObjectSchema } from './dictCountries_oldUpdateOneWithoutDictStatesNestedInput.schema';
import { tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema as tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema } from './tblCustomersUpdateManyWithoutDictStatesNestedInput.schema'

const makeSchema = () => z.object({
  StateID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateAbb: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateName: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictCountries_old: z.lazy(() => dictCountries_oldUpdateOneWithoutDictStatesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema).optional()
}).strict();
export const dictStatesUpdateInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateInput>;
export const dictStatesUpdateInputObjectZodSchema = makeSchema();
