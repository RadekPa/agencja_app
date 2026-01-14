import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsArgsObjectSchema as tblAuthorsArgsObjectSchema } from './tblAuthorsArgs.schema';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema'

const makeSchema = () => z.object({
  tblAuthors: z.union([z.boolean(), z.lazy(() => tblAuthorsArgsObjectSchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional()
}).strict();
export const tblTitAuthorsIncludeObjectSchema: z.ZodType<Prisma.tblTitAuthorsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsInclude>;
export const tblTitAuthorsIncludeObjectZodSchema = makeSchema();
