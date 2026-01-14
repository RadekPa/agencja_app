import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  TitleID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblTitSubClassUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyInput>;
export const tblTitSubClassUncheckedUpdateManyInputObjectZodSchema = makeSchema();
