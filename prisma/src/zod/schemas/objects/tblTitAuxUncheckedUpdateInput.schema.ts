import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  TitleID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CopyrightLine: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblTitAuxUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tblTitAuxUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUncheckedUpdateInput>;
export const tblTitAuxUncheckedUpdateInputObjectZodSchema = makeSchema();
