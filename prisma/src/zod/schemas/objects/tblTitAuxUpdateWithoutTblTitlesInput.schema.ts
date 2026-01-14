import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CopyrightLine: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblTitAuxUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUpdateWithoutTblTitlesInput>;
export const tblTitAuxUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
