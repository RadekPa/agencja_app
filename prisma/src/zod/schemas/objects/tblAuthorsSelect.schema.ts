import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsFindManySchema as tblTitAuthorsFindManySchema } from '../findManytblTitAuthors.schema';
import { TblAuthorsCountOutputTypeArgsObjectSchema as TblAuthorsCountOutputTypeArgsObjectSchema } from './TblAuthorsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  AuthorID: z.boolean().optional(),
  FullName: z.boolean().optional(),
  FirstName: z.boolean().optional(),
  MiddleName: z.boolean().optional(),
  LastName: z.boolean().optional(),
  Suffix: z.boolean().optional(),
  PenName: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  tblTitAuthors: z.union([z.boolean(), z.lazy(() => tblTitAuthorsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblAuthorsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblAuthorsSelectObjectSchema: z.ZodType<Prisma.tblAuthorsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsSelect>;
export const tblAuthorsSelectObjectZodSchema = makeSchema();
