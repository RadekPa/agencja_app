import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PlaceID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  PlaceDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesUncheckedUpdateWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUncheckedUpdateWithoutTblUserAccessInput>;
export const tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectZodSchema = makeSchema();
