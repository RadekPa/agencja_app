import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PlaceDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPlacesUpdateWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesUpdateWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUpdateWithoutTblUserAccessInput>;
export const tblPlacesUpdateWithoutTblUserAccessInputObjectZodSchema = makeSchema();
