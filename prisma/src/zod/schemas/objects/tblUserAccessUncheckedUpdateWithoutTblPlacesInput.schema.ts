import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Login: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedUpdateWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedUpdateWithoutTblPlacesInput>;
export const tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectZodSchema = makeSchema();
