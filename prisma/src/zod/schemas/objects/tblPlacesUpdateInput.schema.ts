import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblUserAccessUpdateManyWithoutTblPlacesNestedInputObjectSchema as tblUserAccessUpdateManyWithoutTblPlacesNestedInputObjectSchema } from './tblUserAccessUpdateManyWithoutTblPlacesNestedInput.schema'

const makeSchema = () => z.object({
  PlaceDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblUserAccess: z.lazy(() => tblUserAccessUpdateManyWithoutTblPlacesNestedInputObjectSchema).optional()
}).strict();
export const tblPlacesUpdateInputObjectSchema: z.ZodType<Prisma.tblPlacesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUpdateInput>;
export const tblPlacesUpdateInputObjectZodSchema = makeSchema();
