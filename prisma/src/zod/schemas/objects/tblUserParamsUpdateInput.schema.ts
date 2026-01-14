import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInputObjectSchema as tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInputObjectSchema } from './tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInput.schema'

const makeSchema = () => z.object({
  Name: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Value: z.union([z.string().max(300), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblUsers: z.lazy(() => tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInputObjectSchema).optional()
}).strict();
export const tblUserParamsUpdateInputObjectSchema: z.ZodType<Prisma.tblUserParamsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUpdateInput>;
export const tblUserParamsUpdateInputObjectZodSchema = makeSchema();
