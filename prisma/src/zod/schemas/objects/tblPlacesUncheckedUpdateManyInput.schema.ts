import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PlaceID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  PlaceDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPlacesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.tblPlacesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUncheckedUpdateManyInput>;
export const tblPlacesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
