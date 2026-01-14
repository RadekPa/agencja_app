import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int(),
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int()
}).strict();
export const tblTitAuthorsCreateManyTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateManyTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateManyTblAuthorsInput>;
export const tblTitAuthorsCreateManyTblAuthorsInputObjectZodSchema = makeSchema();
