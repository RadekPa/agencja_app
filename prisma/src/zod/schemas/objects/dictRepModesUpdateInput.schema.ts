import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInputObjectSchema as tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInputObjectSchema } from './tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInput.schema'

const makeSchema = () => z.object({
  RepModeDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInputObjectSchema).optional()
}).strict();
export const dictRepModesUpdateInputObjectSchema: z.ZodType<Prisma.dictRepModesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUpdateInput>;
export const dictRepModesUpdateInputObjectZodSchema = makeSchema();
