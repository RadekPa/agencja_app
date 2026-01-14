import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInputObjectSchema as tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInputObjectSchema } from './tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInput.schema'

const makeSchema = () => z.object({
  CopyrightLine: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblTitles: z.lazy(() => tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInputObjectSchema).optional()
}).strict();
export const tblTitAuxUpdateInputObjectSchema: z.ZodType<Prisma.tblTitAuxUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUpdateInput>;
export const tblTitAuxUpdateInputObjectZodSchema = makeSchema();
