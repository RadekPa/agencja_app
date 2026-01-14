import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int(),
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int()
}).strict();
export const tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedCreateWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedCreateWithoutTblAuthorsInput>;
export const tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectZodSchema = makeSchema();
