import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  RepModeDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesUpdateWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUpdateWithoutTblClients_obsoleteInput>;
export const dictRepModesUpdateWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
