import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustUsersUncheckedUpdateManyWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedUpdateManyWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedUpdateManyWithoutTblUsersInput>;
export const tblCustUsersUncheckedUpdateManyWithoutTblUsersInputObjectZodSchema = makeSchema();
