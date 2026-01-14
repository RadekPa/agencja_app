import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesNestedInputObjectSchema as tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesNestedInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesNestedInput.schema'

const makeSchema = () => z.object({
  RepModeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RepModeDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesNestedInputObjectSchema).optional()
}).strict();
export const dictRepModesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictRepModesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUncheckedUpdateInput>;
export const dictRepModesUncheckedUpdateInputObjectZodSchema = makeSchema();
