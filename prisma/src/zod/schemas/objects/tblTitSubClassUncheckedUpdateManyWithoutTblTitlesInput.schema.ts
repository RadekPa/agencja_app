import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInput>;
export const tblTitSubClassUncheckedUpdateManyWithoutTblTitlesInputObjectZodSchema = makeSchema();
