import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Login: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustUsersUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedUpdateInput>;
export const tblCustUsersUncheckedUpdateInputObjectZodSchema = makeSchema();
