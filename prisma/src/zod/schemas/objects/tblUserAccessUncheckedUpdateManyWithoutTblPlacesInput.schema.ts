import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Login: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserAccessUncheckedUpdateManyWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedUpdateManyWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedUpdateManyWithoutTblPlacesInput>;
export const tblUserAccessUncheckedUpdateManyWithoutTblPlacesInputObjectZodSchema = makeSchema();
