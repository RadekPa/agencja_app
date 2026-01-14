import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  TitleID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInput>;
export const tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
