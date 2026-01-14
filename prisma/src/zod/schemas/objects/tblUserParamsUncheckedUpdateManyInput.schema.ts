import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Login: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Name: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Value: z.union([z.string().max(300), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserParamsUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.tblUserParamsUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUncheckedUpdateManyInput>;
export const tblUserParamsUncheckedUpdateManyInputObjectZodSchema = makeSchema();
