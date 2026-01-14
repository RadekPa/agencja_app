import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Login: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedUpdateWithoutTblCustomersInput>;
export const tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
