import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblUserAccessUncheckedUpdateManyWithoutTblPlacesNestedInputObjectSchema as tblUserAccessUncheckedUpdateManyWithoutTblPlacesNestedInputObjectSchema } from './tblUserAccessUncheckedUpdateManyWithoutTblPlacesNestedInput.schema'

const makeSchema = () => z.object({
  PlaceID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  PlaceDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblUserAccess: z.lazy(() => tblUserAccessUncheckedUpdateManyWithoutTblPlacesNestedInputObjectSchema).optional()
}).strict();
export const tblPlacesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tblPlacesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUncheckedUpdateInput>;
export const tblPlacesUncheckedUpdateInputObjectZodSchema = makeSchema();
