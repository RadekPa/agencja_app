import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateNestedManyWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateNestedManyWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateNestedManyWithoutTblAuthorsInput.schema'

const makeSchema = () => z.object({
  FullName: z.string().max(150).optional().nullable(),
  FirstName: z.string().max(150).optional().nullable(),
  MiddleName: z.string().max(100).optional().nullable(),
  LastName: z.string().max(150).optional().nullable(),
  Suffix: z.string().max(50).optional().nullable(),
  PenName: z.string().max(150).optional().nullable(),
  UserMod: z.string().max(30).optional(),
  DateMod: z.coerce.date().optional(),
  Remarks: z.string().max(1000).optional().nullable(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsCreateNestedManyWithoutTblAuthorsInputObjectSchema).optional()
}).strict();
export const tblAuthorsCreateInputObjectSchema: z.ZodType<Prisma.tblAuthorsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsCreateInput>;
export const tblAuthorsCreateInputObjectZodSchema = makeSchema();
