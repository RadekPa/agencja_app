import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsArgsObjectSchema as tblAuthorsArgsObjectSchema } from './tblAuthorsArgs.schema';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema'

const makeSchema = () => z.object({
  AuthorID: z.boolean().optional(),
  TitleID: z.boolean().optional(),
  Main: z.boolean().optional(),
  Lp: z.boolean().optional(),
  tblAuthors: z.union([z.boolean(), z.lazy(() => tblAuthorsArgsObjectSchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional()
}).strict();
export const tblTitAuthorsSelectObjectSchema: z.ZodType<Prisma.tblTitAuthorsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsSelect>;
export const tblTitAuthorsSelectObjectZodSchema = makeSchema();
