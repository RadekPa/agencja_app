import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Invoice_Nr: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Title: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN: z.union([z.string().max(16), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblPdoxInvMatUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatUncheckedUpdateInput>;
export const tblPdoxInvMatUncheckedUpdateInputObjectZodSchema = makeSchema();
