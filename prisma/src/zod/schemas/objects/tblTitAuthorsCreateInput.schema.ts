import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateNestedOneWithoutTblTitAuthorsInput.schema';
import { tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int(),
  tblAuthors: z.lazy(() => tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema),
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema)
}).strict();
export const tblTitAuthorsCreateInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateInput>;
export const tblTitAuthorsCreateInputObjectZodSchema = makeSchema();
