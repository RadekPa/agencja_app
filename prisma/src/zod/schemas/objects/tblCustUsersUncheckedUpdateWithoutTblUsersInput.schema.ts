import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedUpdateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedUpdateWithoutTblUsersInput>;
export const tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectZodSchema = makeSchema();
