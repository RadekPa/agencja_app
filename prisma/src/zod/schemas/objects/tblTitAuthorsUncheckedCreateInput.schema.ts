import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.number().int(),
  TitleID: z.number().int(),
  Main: z.number().int().optional().nullable(),
  Lp: z.number().int()
}).strict();
export const tblTitAuthorsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedCreateInput>;
export const tblTitAuthorsUncheckedCreateInputObjectZodSchema = makeSchema();
