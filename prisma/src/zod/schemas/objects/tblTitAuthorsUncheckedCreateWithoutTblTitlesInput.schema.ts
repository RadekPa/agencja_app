import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.number().int(),
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int()
}).strict();
export const tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedCreateWithoutTblTitlesInput>;
export const tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
