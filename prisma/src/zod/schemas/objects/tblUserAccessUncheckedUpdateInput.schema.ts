import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Login: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  PlaceID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserAccessUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedUpdateInput>;
export const tblUserAccessUncheckedUpdateInputObjectZodSchema = makeSchema();
