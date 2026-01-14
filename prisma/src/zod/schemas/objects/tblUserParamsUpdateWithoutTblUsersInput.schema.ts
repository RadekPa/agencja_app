import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Name: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Value: z.union([z.string().max(300), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserParamsUpdateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUpdateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUpdateWithoutTblUsersInput>;
export const tblUserParamsUpdateWithoutTblUsersInputObjectZodSchema = makeSchema();
