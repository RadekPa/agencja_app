import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PlaceID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserAccessUncheckedUpdateManyWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedUpdateManyWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedUpdateManyWithoutTblUsersInput>;
export const tblUserAccessUncheckedUpdateManyWithoutTblUsersInputObjectZodSchema = makeSchema();
