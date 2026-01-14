import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema)
}).strict();
export const tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateWithoutTblAuthorsInput>;
export const tblTitAuthorsCreateWithoutTblAuthorsInputObjectZodSchema = makeSchema();
