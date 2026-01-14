import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Login: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustUsersUncheckedUpdateManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedUpdateManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedUpdateManyWithoutTblCustomersInput>;
export const tblCustUsersUncheckedUpdateManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
