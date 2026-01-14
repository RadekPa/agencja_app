import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateNestedOneWithoutTblTitAuxInputObjectSchema as tblTitlesCreateNestedOneWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblTitAuxInput.schema'

const makeSchema = () => z.object({
  CopyrightLine: z.string().max(200).optional().nullable(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblTitAuxInputObjectSchema)
}).strict();
export const tblTitAuxCreateInputObjectSchema: z.ZodType<Prisma.tblTitAuxCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxCreateInput>;
export const tblTitAuxCreateInputObjectZodSchema = makeSchema();
