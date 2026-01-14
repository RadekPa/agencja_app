import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CoverFormatID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CoverFormatDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictCoverFormatUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUncheckedUpdateManyInput>;
export const dictCoverFormatUncheckedUpdateManyInputObjectZodSchema = makeSchema();
