import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PlaceID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedUpdateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedUpdateWithoutTblUsersInput>;
export const tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectZodSchema = makeSchema();
