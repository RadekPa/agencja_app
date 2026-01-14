import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUncheckedUpdateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUncheckedUpdateWithoutTblUsersInput>;
export const tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectZodSchema = makeSchema();
