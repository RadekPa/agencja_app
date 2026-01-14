import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedUpdateWithoutTblTitlesInput>;
export const tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
