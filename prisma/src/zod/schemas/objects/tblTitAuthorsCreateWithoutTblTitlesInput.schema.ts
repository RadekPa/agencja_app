import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateNestedOneWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int(),
  tblAuthors: z.lazy(() => tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema)
}).strict();
export const tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateWithoutTblTitlesInput>;
export const tblTitAuthorsCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
