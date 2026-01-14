import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.number().int().optional(),
  FullName: z.string().optional().nullable(),
  FirstName: z.string().optional().nullable(),
  MiddleName: z.string().optional().nullable(),
  LastName: z.string().optional().nullable(),
  Suffix: z.string().optional().nullable(),
  PenName: z.string().optional().nullable(),
  UserMod: z.string().optional(),
  DateMod: z.coerce.date().optional(),
  Remarks: z.string().optional().nullable()
}).strict();
export const tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblAuthorsUncheckedCreateWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsUncheckedCreateWithoutTblTitAuthorsInput>;
export const tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
