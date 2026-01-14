import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CopyrightLine: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxUncheckedUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUncheckedUpdateWithoutTblTitlesInput>;
export const tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
